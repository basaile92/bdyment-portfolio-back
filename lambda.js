import schema from "./modules/index.js";
import {ApolloServer} from "apollo-server-lambda";


const server = new ApolloServer(schema);
export const handler = server.createHandler();