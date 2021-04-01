(function main() {
    "use strict";
    angular.module('app', []).controller('controlador', ($scope) => {
        $scope.mensagem = 'teste';
    });
})();