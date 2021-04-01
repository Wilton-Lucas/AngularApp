class Calculadora {

    constructor() {
        this.total = 0;
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

c = new Calculadora();



angular.module('app', []).controller('controlador', ($scope) => {


    $scope.valorDigitado = '';
    $scope.operacao = 0;
    $scope.total = c.getTotal();
    $scope.display = c.getTotal() + $scope.valorDigitado;
    $scope.somar = () => { c.somar(parseInt($scope.valorDigitado)); $scope.valorDigitado = ''; console.log('total: ' + c.getTotal()) };
    $scope.subtrair = c.subtrair($scope.valorDigitado);
    $scope.multiplicar = c.multiplicar($scope.valorDigitado);
    $scope.dividir = c.dividir($scope.valorDigitado);
    $scope.limpar = () => { c.limpar(); $scope.valorDigitado = ''; $scope.display = ''; };
})




