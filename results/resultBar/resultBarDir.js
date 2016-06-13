angular.module('gameApp')
.directive( 'resultBarDir', function( resultsSrv ){
	
	return{
		templateUrl: './results/resultBar/resultBar.html',
		controller: function( $scope, $firebaseArray, fb, resultsSrv){
			$scope.showResults = false;
			$scope.saveFavorite = function( obj, idx ){
				var userUrl = new Firebase( fb.urlRef + "/users/" + resultsSrv.userId + "/favorites" );
				var users = $firebaseArray( userUrl );		
				users.$add(obj[idx]);
			}
			$scope.saveCurrent = function(){
				var userUrl = new Firebase( fb.urlRef + "/users/" + resultsSrv.userId + "/favorites" );
				var users = $firebaseArray( userUrl );		
				users.$add( $scope.currentResult );
			}
			console.log("results", resultsSrv.userId);
		}
	}
})