import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs, resolvers } from './schema.js';

// create apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers, // handle any incoming requests/queries and return data to the clients
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log('Server is running on port ' + url);
