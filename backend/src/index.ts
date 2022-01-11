import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import serverless from "serverless-http";
import { apiRouter } from "./routes/api.routes";
import { extRouter } from "./routes/external.routes";

// TOKEN LUIZ -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmE4NDRkMzc3ZWYxMzVmZGVjNzM5YSIsImlhdCI6MTYzOTYxMzk0MCwiZXhwIjoxNjM5NzAwMzQwfQ.EvYbN7hJvkORRszkAx1N0LHY0ab85bcsnMKCTtQZGu8
// TOKEN LUIZ9 -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjdkNmE1YjEzZmY5YjRjODc0NjY4NyIsImlhdCI6MTYzOTYxMzk2OSwiZXhwIjoxNjM5NzAwMzY5fQ.8VIWkDDMRxy_UqGY6XdjrDB-XC7pM1V7-mEifv2bKVA

dotenv.config();

const ENV_VARS = {
  // port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
};

const app = express();

app.use(express.json());
app.use(cors());

app.use(apiRouter);
app.use(extRouter);

// app.listen(ENV_VARS.port, async () => {
//   console.log("Server Funcionando na porta: ", ENV_VARS.port);

//   if (ENV_VARS.mongoURI) {
//     mongoose.connect(ENV_VARS.mongoURI);
//     console.log("DB conectada");
//   } else {
//     console.log("Erro ao conectar a DB");
//   }
// });

mongoose.connect(ENV_VARS.mongoURI as string);

export const handler = serverless(app, {
  callbackWaitsForEmptyEventLoop: false,
});

export { ENV_VARS };
