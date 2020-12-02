 "use strict";
angular.module('AngStarter')
    .controller('ProdCtrl', ['$scope', function ($scope) {
    	$scope.appTitle = "Productos disponibles.";
    	$scope.appTitleCot = "Realizar cotización.";

    	var localStorageKeyName = 'data-productos';
    	$scope.items = [];

    	if (localStorage.getItem(localStorageKeyName) != null){
    		$scope.items = JSON.parse(localStorage.getItem(localStorageKeyName));
    	}

    	$scope.add = function(){

    		if (typeof $scope.prod === undefined || typeof $scope.ndp === undefined || !parseInt($scope.stock) 
    			|| !parseInt($scope.precio) || !parseInt($scope.cod)) return;

    		var newitem = {
    			prod: $scope.prod,
    			ndp: $scope.ndp,
    			stock: $scope.stock,
    			precio: $scope.precio,
    			cod: $scope.cod,
    			show: false
    		};

    		$scope.prod = '';
    		$scope.ndp = '';
			$scope.stock = '';
			$scope.precio = '';
			$scope.cod = '';

			$scope.items.push(newitem);
			localStorage.setItem(localStorageKeyName, JSON.stringify($scope.items));
    	}

    	$scope.delete = function(index){
    		$scope.items.splice(index, 1);
    		localStorage.setItem(localStorageKeyName, JSON.stringify($scope.items));
    	}

		$scope.change = function(index){
    		$scope.items[index].show = !($scope.items[index].show);
    		localStorage.setItem(localStorageKeyName, JSON.stringify($scope.items));
    	}    	

    	$scope.addCot =function(index){

    		if ()

    	}

    	var localStorageKeyName2 = 'data-comprar';
    	$scope.carrito = [];

    	if(localStorage.getItem(localStorageKeyName2) !== null) {
    		$scope.carrito = JSON.parse(localStorage.getItem(localStorageKeyName2));
    	}

    	$scope.precioTotal = function() {

    		$scope.precioAcumulado = 0;

    		for (let index = 0; index < $scope.carrito.lenght; index++) {

    			$scope.precioAcumulado = parseInt($scope.precioAcumulado) + parseInt($scope.carrito[index].precio);
    		}
    	}

    	$scope.agregarCarrito = function(index) {

    		var prodCarrito = {
    			prod: $scope.items[index].prod,
    			ndp: $scope.items[index].ndp,
    			stock: $scope.items[index].stock,
    			precio: $scope.items[index].precio,
    			cod: $scope.items[index].cod,
    			cant: 1
    		}

    		scope.carrito.push(prodCarrito);
			localStorage.setItem(localStorageKeyName2, JSON.stringify($scope.carrito));
    	}

    	$scope.aumentar = function(index) {

    		var cantidad = $scope.carrito[index].cant;
    		var price = $scope.carrito[index].precio;

    		cantidad++;

    		price = (price/(cantidad-1))*cantidad;

    		$scope.carrito[index].precio = price;
    		$scope.carrito[index].cantidad = cantidad	

    		localStorage.setItem(localStorageKeyName2, JSON.stringify($scope.carrito));

    		$scope.precioTotal();	
    	}

    	$scope.disminuir = function(index) {

    		var cantidad = $scope.carrito[index].cant;
    		var price = $scope.carrito[index].precio;

    		if (cantidad > 1) {

    			cantidad--;
    			price = (price/(cantidad+1))*cantidad;
    		}

    		$scope.carrito[index].precio = price;
    		$scope.carrito[index].cantidad = cantidad	

    		localStorage.setItem(localStorageKeyName2, JSON.stringify($scope.carrito));

    		$scope.precioTotal();	
    	}

    	$scope.eliminar = function(index){
    		$scope.carrito.splice(index, 1);
    		localStorage.setItem(localStorageKeyName2, JSON.stringify($scope.carrito));
    		$scope.precioTotal();
    	}

        
    }])