 "use strict";
angular.module('AngStarter')
    .controller('UsersCtrl', ['$scope', function ($scope) {
    	$scope.appTitle = "Nuestros usuarios.";

    	var localStorageKeyName = 'data-usuarios';
    	$scope.items = [];

    	if (localStorage.getItem(localStorageKeyName) != null){
    		$scope.items = JSON.parse(localStorage.getItem(localStorageKeyName));
    	}

    	$scope.add = function(){

            var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    		if (typeof $scope.name === undefined || typeof $scope.ndu === undefined || !emailRegex.test($scope.mail) 
                || typeof $scope.pass === undefined || typeof $scope.tipo === undefined) return;

    		var newitem = {
    			name: $scope.name,
    			ndu: $scope.ndu,
                mail: $scope.mail,
    			pass: $scope.pass,
    			tipo: $scope.tipo,
    			show: false
    		};

    		$scope.name = '';
			$scope.ndu = '';
            $scope.mail = '';
			$scope.pass = '';
			$scope.tipo = '';

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