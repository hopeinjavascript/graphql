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
        reviews: [Review]
        authors: [Author]
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
  },
};
