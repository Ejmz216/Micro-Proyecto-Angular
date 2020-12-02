/**
 * Created by Maikel Rivero Dorta mriverodorta@gmail.com on 7/08/14.
 */
'use strict';
angular.module('AngStarter')
    .config(['$routeProvider', function($routeProvider) {
        var view = function(view) {
            return 'partials/' + view.split('.').join('/') + '.html';
        }
        $routeProvider
        .otherwise({redirectTo: '/'})
        .when('/', {templateUrl: view('productos'), controller: 'ProdCtrl'})
        .when('/about', {templateUrl: view('about'), controller: 'AboutCtrl'})
        .when('/contact', {templateUrl: view('contact'), controller: 'ContactCtrl'})
        .when('/unautorized', {template: 'The server respond 401 Unautorized.'})

        .when('/productos', {templateUrl: view('productos'), controller: 'ProdCtrl'})
        .when('/clientes', {templateUrl: view('clientes'), controller: 'ClientCtrl'})
        .when('/usuarios', {templateUrl: view('usuarios'), controller: 'UsersCtrl'})
        .when('/proveedores', {templateUrl: view('proveedores'), controller: 'ProvCtrl'})
        .when('/comprar', {templateUrl: view('comprar'), controller: 'ComprarCtrl'})
        .when('/cotizar', {templateUrl: view('cotizar'), controller: 'ProdCtrl'})
        
        ;
    }]);
