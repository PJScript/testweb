import 'reflect-metadata'
import morgan from 'morgan';
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import { Query, Resolver,buildSchemaSync } from 'type-graphql'
// import typeDefs from './schema/schema'
import UserResolver from './resolver/UserResolver'
import getDataResolver from './resolver/getDataResolver';
import { createConnection } from 'typeorm';
import FlowerInfoResolver from './resolver/flowerInfoResolver';
dotenv.config();


const prod: boolean = process.env.NODE_ENV === 'production';
// const port = prod ? process.env.PORT : 8000;



const server = async () => {
  await createConnection();
  
  const schema = await buildSchemaSync({
    resolvers: [UserResolver, FlowerInfoResolver, getDataResolver]
  })

  const apolloServer = new ApolloServer({schema});

  const app = express();
  console.log("Test")
  app.use(cors({
    origin:'*'
  }))
  await apolloServer.start()
  apolloServer.applyMiddleware({app})
  

  // app.use()
  app.listen({ port: process.env.PORT || 4000 },()=>{
    console.log('server is on port ')
  })
}

server()

