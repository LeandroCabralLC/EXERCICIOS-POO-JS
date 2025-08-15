class ContaBancaria {
  constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
    this.saldoCorrente = saldoCorrente;
    this.saldoPoupanca = saldoPoupanca;
    this.jurosPoupanca = jurosPoupanca;
  }

  deposito(valor) {
    this.saldoCorrente += valor;
  } 

  saque(valor) {
    this.saldoCorrente -= valor;
  }

  tansferenciaCP(valor) {
    this.saldoCorrente -= valor;
    this.saldoPoupanca += valor;

  }

  transferenciaCC(valor) {
    this.saldoPoupanca -= valor;
    this.saldoCorrente += valor;
  }

  jurosDeAniversario() {
    let juros = (this.saldoPoupanca * this.jurosPoupanca) / 100;
    this.saldoPoupanca += juros;
  }

}

  class ContaEspecial extends ContaBancaria {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
        super(saldoCorrente, saldoPoupanca, jurosPoupanca*2)
    }

}




let conta = new ContaBancaria(1000, 7000, 1);

console.log(conta);

conta.saque(300);

console.log(conta);

conta.deposito(6000);

console.log(conta);

conta.tansferenciaCP(4000);

console.log(conta);

conta.jurosDeAniversario();

console.log(conta);

let conta2 = new ContaEspecial(20000, 60000, 1);

console.log(conta2);