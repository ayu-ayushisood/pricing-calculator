app.controller('mainController', ['$scope', 
	function($scope){
		$scope.products=[{name: 'Gamification', price: 500, description: 'Gamification allows you to Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
		{name: 'Module 2', price: 200, description: 'Module 2 allows you to Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
		{name: 'Module 3', price: 100, description: 'Module 3 allows you to Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
		{name: 'Module 4', price: 400, description: 'Module 4 allows you to Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
		{name: 'Module 5', price: 200, description: 'Module 5 allows you to Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
		{name: 'Module 6', price: 200, description: 'Module 6 allows you to Lorem Ipsum Lorem Ipsum Lorem Ipsum' }];
	    $scope.selection=[];

	    $scope.toggleSelection = function toggleSelection(product) {
	    	var idx = $scope.selection.indexOf(product);
	        if (idx > -1) {
	            $scope.selection.splice(idx, 1);
	        }
	        else {
	        	$scope.selection.push(product);
	        }
	    };
	    
	}]);