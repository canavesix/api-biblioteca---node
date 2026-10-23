import mongoose from "mongoose";
// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
  {
  //middleware de erro sempre tem 4 parametros
    if (erro instanceof mongoose.Error.CastError) {
      res
        .status(400)
        .send({
          message: "Um ou mais dados foram informados de forma incorreta.",
        });
    } else {
      res.status(500).send({ message: "erro interno no servidor" });
    }
  }
}

export default manipuladorDeErros;