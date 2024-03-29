/* import express from 'express';

const app = express();

app.use(express.json());
app.get('/', (_req, res) => { 
    res.send('Everything is good')
})
const port = 8000

app.listen(port, () => console.log('listening on port ' + port)); */

import { ApolloServer } from "apollo-server-express";
import Schema from "./Schema";
import Resolvers from "./Resolvers";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import conn from "./database";

async function startApolloServer(schema: any, resolvers: any) {
    conn.on("connection", () => {
        console.log("Connection established with mongoDB");
      });
      
      conn.on("error", () => {
        console.log("An error occurred");
      });
      
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    //tell Express to attach GraphQL functionality to the server
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;
  await server.start(); //start the GraphQL server.
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve) //run the server on port 4000
  );
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}
//in the end, run the server and pass in our Schema and Resolver.
startApolloServer(Schema, Resolvers);

