angular.module('gameApp')
.directive( 'resultBarDir', function(){
	
	return{
		scope:{
			results: '='
		},
		templateUrl: './results/resultBar/resultBar.html',
		controller: function( $scope, $firebaseArray, fb, resultsSrv, $q ){
			var questions = $firebaseArray( fb.questionsRef );
			var answers = $firebaseArray( fb.answersRef );

			$scope.randomResults = resultsSrv.getData(questions, answers).then(function(response){
				resultsSrv.randomObj(response);
			})

			

			
		}
	}
})