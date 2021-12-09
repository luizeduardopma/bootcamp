import http from "http";
import express from "express";

const app = express();

app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Servidor Express",
  });
});

app.listen(port, () => {
  console.log("Server Funcionando na porta: ", port);
});
