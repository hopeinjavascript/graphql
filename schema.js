import db from './data.js';

// GraphQL supports 5 datatypes = int (whole numbers), float (decimals number), String, Boolean, ID
export const typeDefs = `#graphql
    type Product {
        id: ID!
        title: String!
        colors: [String!]!
        sizes: [Int!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        title: String
        content: String!
        product: Product!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        isAdmin: Boolean!
        reviews : [Review!]
    }
    type Query {
        products: [Product]
        product(id: ID!): Product
        reviews: [Review]
        review(id: ID!): Review
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation {
        deleteProduct(id: ID!): [Product]
        addProduct(product: AddProductInput!): Product
    }
    input AddProductInput {
        title: String!
        colors: [String!]!
        sizes: [Int!]!
    }
`;

// resolvers are functions
// fn names must match with those defined in the typeDefs
export const resolvers = {
  Query: {
    products() {
      return db.products;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
    // resolve function take 3 parameters -> parents(to work with related data), args (get hold of query variables), context
    product(parent, args, ctx) {
      return db.products.find((product) => product.id === args.id);
    },
    review(parent, args, ctx) {
      return db.reviews.find((review) => review.id === args.id);
    },
    author(parent, args, ctx) {
      return db.authors.find((author) => author.id === args.id);
    },
  },

  Product: {
    reviews(parent) {
      return db.reviews.filter((review) => review.product_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id);
    },
    product(parent) {
      return db.products.find((product) => product.id === parent.product_id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id);
    },
  },

  // mutations
  Mutation: {
    deleteProduct(_, args) {
      db.products = db.products.filter((product) => product.id !== args.id);
      return db.products;
    },
    addProduct(_, args) {
      const newProduct = {
        id: Date.now(),
        // ...args.product OR
        title: args.product.title,
        colors: args.product.colors,
        sizes: args.product.sizes,
      };

      db.products.push(newProduct);

      return newProduct;
    },
  },
};
