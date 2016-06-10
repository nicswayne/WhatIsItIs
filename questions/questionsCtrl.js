angular.module('gameApp')
.controller( 'questionsCtrl', function( $scope, questionsSrv, $firebaseArray, fb ){
	
	var questions = $firebaseArray( fb.questionsRef )

	$scope.addQuestions = function( newObj ){
		for(key in newObj){
			if(newObj[key]){
				questions.$add(newObj[key]);
			}
		}
	}
} );