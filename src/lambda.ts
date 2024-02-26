import schema from "./modules/index";
import {ApolloServer} from "apollo-server-lambda";


const server = new ApolloServer(schema);
export const handler = server.createHandler();