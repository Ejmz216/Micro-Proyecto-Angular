 "use strict";
angular.module('AngStarter')
    .controller('ProvCtrl', ['$scope', function ($scope) {
    	$scope.appTitle = "Nuestros proveedores.";

    	var localStorageKeyName = 'data-proveedores';
    	$scope.items = [];

    	if (localStorage.getItem(localStorageKeyName) != null){
    		$scope.items = JSON.parse(localStorage.getItem(localStorageKeyName));
    	}

    	$scope.add = function(){

            var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    		if (!parseInt($scope.id) || typeof $scope.ndp === undefined || !parseInt($scope.num) || !emailRegex.test($scope.mail)) return;

    		var newitem = {
    			id: $scope.id,
    			ndp: $scope.ndp,
    			num: $scope.num,
    			mail: $scope.mail,
    			show: false
    		};

    		$scope.id = '';
			$scope.ndp = '';
			$scope.num = '';
			$scope.mail = '';

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