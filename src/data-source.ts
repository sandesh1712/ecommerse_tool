import "reflect-metadata";
import { DataSource } from "typeorm";

const db = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  name: process.env.DATABASE_NAME,
};

const AppDataSource = new DataSource({
  type: "mysql",
  host: db.host,
  port: parseInt(db.port,10),
  username: db.user,
  password: db.password,
  database: db.name,
  synchronize: true,
  logging: false,
  entities: ["./src/entity/*.ts"],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize().then( async()=>{
  console.log("Connection established with DB");
}).catch(err=>{
    console.log(err.message);
})

export default AppDataSource;

