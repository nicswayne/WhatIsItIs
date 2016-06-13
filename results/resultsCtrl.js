angular.module('gameApp')
.controller( 'resultsCtrl', function( $scope, fb, $firebaseArray, resultsSrv, $stateParams ){

	var questionsUrl = new Firebase( fb.gamesRef + "/" + $stateParams.id + '/questions' );
	var questions = $firebaseArray( questionsUrl );
	var answersUrl = new Firebase( fb.gamesRef + "/" + $stateParams.id + '/answers' );
	var answers = $firebaseArray( answersUrl );
	var idx = 0;

	var randomResults = resultsSrv.getData(questions, answers)
		.then(function(response){
			return resultsSrv.randomObj(response);
		})
		.then(function(response){
			$scope.results = response;
			$scope.currentResult = $scope.results[idx];
		})
	$scope.showNext = function(){
		if(idx < $scope.results.length -1){
			idx = idx + 1;
		} else {
			idx = 0;
		}
		$scope.currentResult = $scope.results[idx];
	}
	$scope.showPrev = function(){
		if(idx > 0){
			idx = idx - 1;
		} else {
			idx = $scope.results.length - 1;
		}
		$scope.currentResult = $scope.results[idx];
	}
	$scope.gameName = $stateParams.id;

	$scope.clearResults = function(){
		questionsUrl.remove();
		answersUrl.remove();
	}

	$scope.clearGame = function(){
		var gameUrl = new Firebase( fb.gamesRef + "/" + $stateParams.id );
		gameUrl.remove();
	}


})