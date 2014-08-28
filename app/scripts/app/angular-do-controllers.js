angular.module('angular-do')
	.controller('ProvincesController', function ($scope, $provincesService) {
		$scope.myProvinces = [];
		
		$scope.serviceProvinces = $provincesService.query({},function () {
			if(!$scope.serviceProvinces)
				$scope.serviceProvinces.push({ id: 0, nombre: 'No Hay Provincias Disponibles' });
		});

		$scope.addProvince = function addProvince () {
			var selected = JSON.parse($scope.selected);
			for (var i = $scope.myProvinces.length - 1; i >= 0; i--) {
				if ($scope.myProvinces[i].id === selected.id) return;
			};
			$scope.myProvinces[$scope.myProvinces.length] = selected;
		};
	});