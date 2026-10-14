import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectDatabase();
connection.on("error", (erro) => {
  console.error("erro de conexão: ", erro);
});

connection.once("open", () => {
  console.log("Conexão estabelecida com sucesso");
});

const app = express(); // app guarda tudo, absolutamente tudo que existe dentro do framework express
routes(app);


app.delete("/livros/:id", (req, res) => {
  const index = findBook(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro deletado com sucesso");
});

export default app;
