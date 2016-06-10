angular.module('gameApp')
.directive( 'resultBarDir', function(){
	
	return{
		scope:{
			question: '=',
			answer: '='
		},
		templateUrl: './results/resultBar/resultBar.html',
		controller: function( $scope){
			$scope.question = $scope.question.$value;
			console.log("$id", $scope.question.$value);

			
		}
	}
})