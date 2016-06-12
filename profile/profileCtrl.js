angular.module('gameApp')
.controller('profileCtrl', function( $scope ){
	$scope.logout = function(){
		fb.urlRef.unauth();
	}

}])