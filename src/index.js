import { GraphQLServer, PubSub } from "graphql-yoga"
import  db from "./db"
import Query from "./resolvers/Query"
import Mutation from "./resolvers/Mutation"
import Subscription from "./resolvers/Subscribtion"
import Reader from "./resolvers/Reader"
import Book from "./resolvers/Book"

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers : {
    Query,
    Mutation,
    Subscription,
    Reader,
    Book
  },
  context: {db, pubsub: new PubSub()},
  
});

server.start(() => "server is up and running");
