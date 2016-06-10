angular.module('gameApp')
.controller( 'resultsCtrl', function( $scope, fb, $firebaseArray ){

	$scope.questions = $firebaseArray( fb.questionsRef );
	console.log("resultCtrl", $scope.questions);
	$scope.answers = $firebaseArray( fb.answersRef );
})