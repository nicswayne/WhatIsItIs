angular.module('gameApp')
.directive( 'resultBarDir', function( resultsSrv ){
	
	return{
		templateUrl: './results/resultBar/resultBar.html',
		controller: function( $scope, $firebaseArray, fb, resultsSrv){
			$scope.showResults = false;
			$scope.word = "Show";
			$scope.change = function(){
				$scope.showResults = !$scope.showResults;
				if ($scope.showResults === false){
					$scope.word = "Show";
				} else {
					$scope.word = "Hide";
				}
			}

			$scope.saveFavorite = function( obj, idx ){
				var userUrl = new Firebase( fb.urlRef + "/users/" + resultsSrv.userId + "/favorites" );
				var users = $firebaseArray( userUrl );
				console.log("ID", resultsSrv.userId );
				console.log("info", resultsSrv.userInfo);		
				users.$add(obj[idx]);
			}
			$scope.saveCurrent = function(){
				var userUrl = new Firebase( fb.urlRef + "/users/" + resultsSrv.userId + "/favorites" );
				var users = $firebaseArray( userUrl );		
				users.$add( $scope.currentResult );
			}
		}
	}
})