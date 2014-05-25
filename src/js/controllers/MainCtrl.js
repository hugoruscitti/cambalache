var app = angular.module('app');

app.controller("MainCtrl", function($scope) {
  $scope.data = {};

  $scope.seleccionar_captura = function(numero) {
    $scope.data.programa.captura = numero;
  }

  $scope.esta_activa_la_captura = function(numero) {
    return (numero === $scope.data.programa.captura);
  }

  $scope.mostrar_siguiente_captura = function() {
    $scope.data.programa.captura += 1;

    if ($scope.data.programa.captura > 3)
      $scope.data.programa.captura = 1;

  }

  $scope.data.programa = {
    titulo: "Thomas Was Alone",
    nick: 'thomas',
    descripcion: 'Thomas Was Alone es un videojuego complejo y apasionante. Tienes que llevar al protagonista por una serie de desafíos, acetijos y puzzles complejos.',
    breve: 'Un juego de aventuras y desafíos',
    captura: 1,
  }

});
