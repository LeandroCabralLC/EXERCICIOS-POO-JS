class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set atualizarRua(novaRua) {
    this.rua = novaRua;
  }

  set atualizarBairro(novoBairro) {
    this.bairro = novoBairro;
  }

  set atualizarCidade(novaCidade) {
    this.cidade = novaCidade;
  }

  set atualizarEstado(novoEstado) {
    this.estado = novoEstado;
  }
}
    
 let   endereco = new Endereco("Rua Maria Alice", "Aflitos", "Recife", "PE");
 console.log(endereco);

 endereco.atualizarRua = "Rua Forte das Cinco Pontas";

 console.log(endereco);

 endereco.atualizarCidade = "Jabotão dos Guararapes";

 console.log(endereco);

