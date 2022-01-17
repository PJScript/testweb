import 'reflect-metadata'
import morgan from 'morgan';
import compression from 'compression'
import express from 'express'
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import { Query, Resolver,buildSchemaSync } from 'type-graphql'
// import typeDefs from './schema/schema'
import TestResolver from './resolver/testResolver'
import getDataResolver from './resolver/getDataResolver';
import { createConnection } from 'typeorm';
dotenv.config();


const prod: boolean = process.env.NODE_ENV === 'production';
const port = prod ? process.env.PORT : 8000;



const server = async () => {
  await createConnection();
  
  const schema = await buildSchemaSync({
    resolvers: [TestResolver]
  })

  const apolloServer = new ApolloServer({schema});

  const app = express();

  await apolloServer.start()
  apolloServer.applyMiddleware({app})
  

  // app.use()
  app.listen(4000,()=>{
    console.log('server is on port 4000')
  })
}

server()

