import { ConnectionOptions } from "typeorm";
import dotenv from 'dotenv'
dotenv.config()

const connectionOptions: ConnectionOptions[] = [
  {
  "name":"default",
  "type":"mysql",
  "host":process.env.DATABASE_HOST,
  "port":Number(process.env.DATABASE_PORT),
  "username":process.env.DATABASE_USERNAME,
  "password":process.env.DATABASE_PASSWORD,
  "database":process.env.DATABASE_DATABASE,
  "synchronize": true,
  "entities":["src/entity/**/*.ts"],
  "migrations": ["migrations/*.ts"], 
  // "seed":["src/database/seeds/*.*.ts"],
  "cli": { 
    "entitiesDir":"src/entity",
    "migrationsDir": "migrations",
    // "factories": ["src/database/factories/*.factory.ts"] 
  }
}]

export default connectionOptions