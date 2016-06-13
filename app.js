angular.module('gameApp', [ 'ui.router', 'firebase', 'ngMaterial'])
.config(function( $stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise( 'login' );

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
			url: '/whatis/:id',
			templateUrl: './questions/questions.html',
			controller: 'questionsCtrl'
		})
		.state( 'answers', {
			url: '/itis/:id',
			templateUrl: './answers/answers.html',
			controller: 'answersCtrl'
		})
		.state( 'results', {
			url: '/results/:id',
			templateUrl: './results/results.html',
			controller: 'resultsCtrl'
		})
	
})
.constant( 'fb', {
	gamesRef: new Firebase('https://blazing-heat-3287.firebaseio.com/games'),
	urlRef: new Firebase('https://blazing-heat-3287.firebaseio.com/')


});


