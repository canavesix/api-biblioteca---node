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
    } else if (erro instanceof mongoose.Error.ValidationError) {
      const mensagensErros = Object.values(erro.errors).map(erro => erro.message).join("; ")

      res.status(400).send({message: `Os seguintes erros foram encontrados: ${mensagensErros}`});
    } else {
      res.status(500).send({ message: "Erro interno no servidor" });
    }
  }
}

export default manipuladorDeErros;