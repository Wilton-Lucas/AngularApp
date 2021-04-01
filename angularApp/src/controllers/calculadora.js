class Calculadora {

    constructor() {
        this.total = 7;
    }

    somar(numero) {
        this.total += numero;
    }

    subtrair(numero) {
        this.total += numero;
    }

    multiplicar(numero) {
        this.total += numero;
    }

    dividir(numero) {
        if (numero > 0)
            this.total += numero;
    }

    limpar() {
        this.total = 0;
    }

    getTotal() {
        return this.total;
    }



}

