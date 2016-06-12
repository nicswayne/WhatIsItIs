angular.module('gameApp')
.directive( 'resultBarDir', function(){
	
	return{
		templateUrl: './results/resultBar/resultBar.html',
		controller: function( $scope, $firebaseArray, fb, resultsSrv){
			$scope.showResults = false;
			$scope.saveFavorite = function( obj, idx ){		
				console.log(obj[idx]);
			}
			$scope.saveCurrent = function(){
				console.log( $scope.currentResult );
			}
		}
	}
})