class ContaBancaria { //classes utilizam CamelCase e não camelCase como convensão, assim como no Java
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; //sempre colocar o _ antes do nome definido para que possa utilizar apenas o nome no getter e setter
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this.saldo = valor;
    }
    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}
//Super precisa da classe pai sendo necessario por o "extends" para ContaBancaria, no caso, a classe pai
class ContaCorrente extends ContaBancaria{ 
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito() {
        return this._cartaoCredito;
    }
    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if(valor > 500) {
            return "Operação negada!"
        }
        this._saldo = this._saldo - valor;
    }
}