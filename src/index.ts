import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { apiRouter } from "./routes/api.routes";
import { extRouter } from "./routes/external.routes";

dotenv.config();

const ENV_VARS = {
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
};

const app = express();

app.use(express.json());
app.use(apiRouter);
app.use(extRouter);

app.listen(ENV_VARS.port, async () => {
  console.log("Server Funcionando na porta: ", ENV_VARS.port);

  if (ENV_VARS.mongoURI) {
    mongoose.connect(ENV_VARS.mongoURI);
    console.log("DB conectada");
  } else {
    console.log("Erro ao conectar a DB");
  }
});

export { ENV_VARS };
