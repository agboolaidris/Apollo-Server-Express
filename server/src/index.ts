import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { ENV } from "./Config";
import { resolvers, typeDefs } from "./Graphql/index";

//initailize express application
const app = express();
const PORT = ENV.PORT || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: ENV.IN_PROD,
  context: {},
});

const startApp = () => {
  //inject apollo server middleware into express application
  server.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}!`);
  });
};
startApp();
