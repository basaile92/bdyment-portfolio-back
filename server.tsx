import schema from "./modules/index";
import {ApolloServer} from "apollo-server-express";
import express from "express";

const app = express();

async function startServer() {
  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app: app});
}
startServer();

app.listen({ port: 3000 }, () =>
  console.log(`Server ready at http://localhost:3000`)
);
