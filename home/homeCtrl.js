angular.module('gameApp')
.controller( 'homeCtrl', function( $scope, $firebaseArray, fb){
	
	var users = $firebaseArray( fb.usersRef );

	$scope.addUser = function( userObj ){
		users.$add( userObj );
	}
	
})