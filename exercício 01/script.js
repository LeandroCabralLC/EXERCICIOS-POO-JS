class ContaBancaria {
  constructor(saldoInicial = 0) {
    this.saldo = saldoInicial;
  }

  deposito(valor) {
    if (valor <= 0) {
      console.log("Depósito inválido. O valor deve ser positivo.");
      return;
    }
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
  }

  saque(valor) {
    if (valor <= 0) {
      console.log("Saque inválido. O valor deve ser positivo.");
      return;
    }

    if (valor > this.saldo) {
      console.log("Saldo insuficiente para saque.");
      return;
    }

    this.saldo -= valor;
    console.log(`Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
  }

  consultarSaldo() {
    console.log(`Saldo atual: R$${this.saldo}`);
    return this.saldo;
  }
}


const minhaConta = new ContaBancaria(100); 

minhaConta.consultarSaldo();    
minhaConta.deposito(60);        
minhaConta.saque(40);          
minhaConta.saque(200);          
minhaConta.deposito(-10);      
minhaConta.saque(0);           
minhaConta.consultarSaldo();   
