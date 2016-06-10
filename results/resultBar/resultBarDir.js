angular.module('gameApp')
.directive( 'resultBarDir', function(){
	
	return{
		templateUrl: './results/resultBar/resultBar.html',
		controller: function( $scope, $firebaseArray, fb, resultsSrv){
			var questions = $firebaseArray( fb.questionsRef );
			var answers = $firebaseArray( fb.answersRef );

			var getRandomRes = function(){
				return resultsSrv.getData(questions, answers)
					.then(function(response){
						return resultsSrv.randomObj(response);
					})
			};
			getRandomRes().then(function(response){
				$scope.results = response;
			});
			

			
		}
	}
})