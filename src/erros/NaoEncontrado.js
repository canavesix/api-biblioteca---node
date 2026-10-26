import ErroBase from "./erroBase.js";

class NaoEncontrado extends ErroBase {
  constructor(mensagem = "Pagína não encontrada") {
    super(mensagem, 404);
  }
}

export default NaoEncontrado;