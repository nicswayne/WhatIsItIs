angular.module('gameApp')
.directive( 'profileDir', function( resultsSrv ){
	
	return{
		templateUrl: './profile/profile.html',
		controller: function( $scope, $firebaseArray, fb, resultsSrv, $state){
			$scope.logout = function(){
				$state.go( 'login' );
				fb.urlRef.unauth();
			}
			$scope.isOpen = true;
			$scope.userInfo = resultsSrv.userInfo;

		}
	}
})