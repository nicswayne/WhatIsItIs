angular.module('gameApp')
.controller( 'homeCtrl', function( $scope, $firebaseArray, fb){
	
	$scope.games = $firebaseArray( fb.gamesRef );

	$scope.addGame = function( gameObj ){
		var gameName = new Firebase( fb.gamesRef + "/" + gameObj );
		var gameNameUrl = $firebaseArray( gameName );
		gameNameUrl.$add( gameObj );
		$scope.game = gameObj;
	}
	
})