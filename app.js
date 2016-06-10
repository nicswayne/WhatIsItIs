angular.module('gameApp', [ 'ui.router', 'firebase'])
.config(function( $stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise( 'home' );

	$stateProvider
		.state( 'home', {
			url: '/home',
			templateUrl: './home/home.html',
			controller: 'homeCtrl'
		})
		.state( 'login', {
			url: '/login',
			templateUrl: './login/login.html',
			controller: 'loginCtrl'
		})
		.state( 'questions', {
			url: '/whatis',
			templateUrl: './questions/questions.html',
			controller: 'questionsCtrl'
		})
		.state( 'answers', {
			url: '/itis',
			templateUrl: './answers/answers.html',
			controller: 'answersCtrl'
		})
		.state( 'results', {
			url: '/results',
			templateUrl: './results/results.html',
			controller: 'resultsCtrl'
		})
	
})
.constant( 'fb', {
	questionsRef: new Firebase('https://blazing-heat-3287.firebaseio.com/room1/questions'),
	answersRef: new Firebase('https://blazing-heat-3287.firebaseio.com/room1/answers'),
	usersRef: new Firebase('https://blazing-heat-3287.firebaseio.com/users')


});


