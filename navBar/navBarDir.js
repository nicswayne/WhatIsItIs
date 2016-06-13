angular.module('gameApp')
.directive( 'navBarDir', function() {
	return {
		templateUrl: './navBar/navBar.html',
		controller: function( $scope, resultsSrv, $firebaseArray, fb ){
			$scope.showFavorites = false;

			var favsUrl = new Firebase( fb.urlRef + "/users/" + resultsSrv.userId + "/favorites");
			var userFavs = $firebaseArray( favsUrl );
			resultsSrv.getFavs( userFavs )
				.then(function(response){
					$scope.favorites = response;
				});
		}
	}
})