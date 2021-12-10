import express from "express";
import mongoose from "mongoose";
import config from "./config";
import { Movie } from "./models/movie.model";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Servidor Express",
  });
});

app.listen(config.PORT, async () => {
  console.log("Server Funcionando na porta: ", config.PORT);
  mongoose.connect(config.MONGO_URI);
});
