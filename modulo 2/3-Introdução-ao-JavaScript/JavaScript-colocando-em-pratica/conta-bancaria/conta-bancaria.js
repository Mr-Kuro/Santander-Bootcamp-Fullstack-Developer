

class ContaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = 'Conta Bancaria';
        this.saldo = saldo;
    }

    gertterSaldo(saldo) {
        return this.saldo
    }

    setterSaldo(adicionar) {
        this.saldo = this.saldo + saldo
    }

    

};


class ContaCorrente extends ContaBancaria {
    constructor(){
        super('Conta Corrente')
        this.cartaoCredito = 0;
    }   

    getterCartaoCredito() {
        return this.cartaoCredito
    }

    setterCartaoCredito(numeroCartao) {
        this.cartaoCredito = numeroCartao
    }
    
}


class ContaPolpanca extends ContaBancaria {
    constructor(){
        super('Conta Polpança')
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(){
        super('Conta Universitária')
    }

    gertterSaldo()
}

let cb = new ContaBancaria(11, 132131, 00)


let cbc = new ContaCorrente(11, 132131, 00)

let cbp = new ContaPolpanca(11, 132131, 00)

let cbu = new ContaUniversitaria(11, 132131, 00)