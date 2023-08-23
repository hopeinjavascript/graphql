import db from './data.js';

// GraphQL supports 5 datatypes = int (whole numbers), float (decimals number), String, Boolean, ID
export const typeDefs = `#graphql
    type Product {
        id: ID!
        title: String!
        colors: [String!]!
        sizes: [Int!]!
    }
    type Review {
        id: ID!
        rating: Int!
        title: String
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        isAdmin: Boolean!
    }
    type Query {
        products: [Product]
        product(id: ID!): Product
        reviews: [Review]
        review(id: ID!): Review
        authors: [Author]
        author(id: ID!): Author
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
};
