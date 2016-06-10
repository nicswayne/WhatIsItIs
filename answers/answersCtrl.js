angular.module('gameApp')
.controller( 'answersCtrl', function( $scope, fb, $firebaseArray ){

	var answers = $firebaseArray( fb.answersRef )

	$scope.addAnswers = function( newObj ){
		for(key in newObj){
			if(newObj[key]){
				answers.$add(newObj[key]);
			}
		}
	}

})