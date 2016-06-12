angular.module('gameApp')
.controller( 'loginCtrl', function( $scope, fb ){
	
	$scope.login = function (){
		fb.urlRef.authWithOAuthPopup("google", function(error, authData) {
	  		if (error) {
			  switch (error.code) {
			      case "INVALID_EMAIL":
			        alert("The specified user account email is invalid.");
			        break;
			      case "INVALID_PASSWORD":
			        alert("The specified user account password is incorrect.");
			        break;
			      case "INVALID_USER":
			        alert("The specified user account does not exist.");
			        break;
			      default:
	        		alert("Error logging user in:", error);
	        	}
	  		} else {
	   			fb.urlRef.child("users").child(authData.uid).set({
      				provider: authData.provider,
      				firstName: authData.google.cachedUserProfile.given_name,
      				imgUrl: authData.google.cachedUserProfile.picture
    			});
	  		}
		})
	};
	
})