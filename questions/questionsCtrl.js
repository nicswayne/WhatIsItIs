angular.module('gameApp')
.controller( 'questionsCtrl', function( $scope, questionsSrv, $firebaseArray, fb, $stateParams ){
	
	var questions = new Firebase( fb.gamesRef + "/" + $stateParams.id + '/questions' );
	var questionsUrl = $firebaseArray( questions );

	$scope.addQuestions = function( newObj ){
		for(key in newObj){
			if(newObj[key]){
				questionsUrl.$add(newObj[key]);
			}
		}
	}
	$scope.gameName = $stateParams.id;
} );