class Calculadora {

    constructor() {
        this.total = 0;
    }

    somar(numero1, numero2) {
        this.total = numero1 + numero2;
    }

    subtrair(numero1, numero2) {
        this.total = numero1 - numero2;
    }

    multiplicar(numero1, numero2) {
        this.total = numero1 * numero2;
    }

    dividir(numero1, numero2) {
        if (numero2 > 0)
            this.total = numero1 / numero2;
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
    $scope.digitar = (numero) => { $scope.valorDigitado += numero }
    $scope.valorOp1 = 0;
    $scope.operacao = 0;
    $scope.setOperacao = (operacao) => {
        $scope.operacao = operacao;
        if ($scope.valorDigitado != '' && $scope.valorOp1 == 0)
            $scope.valorOp1 = parseFloat($scope.valorDigitado);
        else { $scope.valorOp1 = c.getTotal() }

        $scope.valorDigitado = '';

    }
    $scope.total = c.getTotal();
    $scope.calcular = () => {

        switch ($scope.operacao) {
            case 1: c.somar($scope.valorOp1, parseFloat($scope.valorDigitado)); break;
            case 2: c.subtrair($scope.valorOp1, parseFloat($scope.valorDigitado)); break;
            case 3: c.multiplicar($scope.valorOp1, parseFloat($scope.valorDigitado)); break;
            case 4: c.dividir($scope.valorOp1, parseFloat($scope.valorDigitado)); break;
        }


        $scope.valorDigitado = '';
        $scope.total = c.getTotal();


    }
    $scope.limpar = () => { c.limpar(); $scope.valorDigitado = ''; $scope.valorOp1 = 0; $scope.total = c.getTotal(); }
})




