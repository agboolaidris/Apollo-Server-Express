import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import { Post } from "./Models";
import { ENV } from "./Config";
import { typeDefs, resolvers } from "./Graphql/index";

//initailize express application
const app = express();
const PORT = ENV.PORT || 5000;

//config bodyparser
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true }));

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: ENV.IN_PROD,
  context: {},
});

const startApp = async () => {
  try {
    //config database
    await createConnection({
      type: "mysql",
      username: ENV.DB.USERNAME,
      password: ENV.DB.PASSWORD,
      database: ENV.DB.DBNAME,
      synchronize: true,
      logging: false,
      entities: [Post],
    });

    //inject apollo server middleware into express application
    server.applyMiddleware({ app });
    app.listen(PORT, () => {
      console.log(`server is runing on port ${PORT}!`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
startApp();
