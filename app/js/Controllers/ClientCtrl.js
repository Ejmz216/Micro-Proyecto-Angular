 "use strict";
angular.module('AngStarter')
    .controller('ClientCtrl', ['$scope', function ($scope) {
    	$scope.appTitle = "Nuestros Clientes.";

    	var localStorageKeyName = 'data-clientes';
    	$scope.items = [];

    	if (localStorage.getItem(localStorageKeyName) != null){
    		$scope.items = JSON.parse(localStorage.getItem(localStorageKeyName));
    	}

    	$scope.add = function(){

    		if (typeof $scope.name === undefined || !parseInt($scope.id) || !parseInt($scope.cash) || !parseInt($scope.odt)) return;

    		var newitem = {
    			name: $scope.name,
    			id: $scope.id,
    			cash: $scope.cash,
    			odt: $scope.odt,
    			show: false
    		};

    		$scope.name = '';
			$scope.id = '';
			$scope.cash = '';
			$scope.odt = '';

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

    }])
