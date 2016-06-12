angular.module('gameApp')
.controller( 'answersCtrl', function( $scope, fb, $firebaseArray, $stateParams ){

	var answers = new Firebase( fb.gamesRef + "/" + $stateParams.id + '/answers' );
	var answersUrl = $firebaseArray( answers );

	$scope.addAnswers = function( newObj ){
		for(key in newObj){
			if(newObj[key]){
				answersUrl.$add(newObj[key]);
			}
		}
	}
	$scope.gameName = $stateParams.id;
})