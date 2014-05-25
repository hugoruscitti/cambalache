var app = angular.module('app', []);

app.controller("MainCtrl", function($scope) {
  $scope.data = {};

  $scope.data.programa = {
    titulo: "Thomas Was Alone",
    nick: 'thomas',
    descripcion: 'Thomas Was Alone es un videojuego complejo y apasionante. Tienes que llevar al protagonista por una serie de desafíos, acetijos y puzzles complejos.',
    breve: 'Un juego de aventuras y desafíos',
    captura: 1,
  }

});
