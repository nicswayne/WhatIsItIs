angular.module('gameApp')
.service( 'resultsSrv', function( $q ){
	
	this.userInfo = {};
	this.userId = 0;

	this.combine = function(quest, ans){
		var result = [];
		for (var i = 0; i < quest.length; i++) {
			var obj = {}
			obj.question = quest[i];
			obj.answer = ans[i];
			result.push(obj);
		}
		return result;
	}
	this.getData = function(questions, answers){
				var answersLoaded = false;
				var questionsLoaded = false;
				var resultObj = {};

				var allResults = $q.defer()

				questions.$loaded().then(function(qResp){
					resultObj.questions = qResp;
					questionsLoaded = true;
					if(answersLoaded){
						allResults.resolve(resultObj);
					}
				})
				answers.$loaded().then(function(qResp){
					resultObj.answers = qResp;
					answesLoaded = true;
					if(questionsLoaded){
						allResults.resolve(resultObj);
					}
				})
				return allResults.promise;
			}
	this.getFavs = function( fbArr ){
		var result = $q.defer();
		fbArr.$loaded()
			.then(function(favResp){
				result.resolve(favResp);
			})
		return result.promise;
	}

	this.makeArr = function( arr ){
		var newArr = [];
		for (var i = 0; i < arr.length; i++) {
			newArr.push(arr[i].$value);
		}
		return newArr;
	}
	this.randomObj = function( obj ){
		resultsObj = [];
		function randomize( arr ){
			newArr = [];
			while(newArr.length !== arr.length){
				randomIndex = Math.floor(Math.random() * arr.length);
				if(newArr.indexOf(arr[randomIndex].$value) === -1){
					newArr.push(arr[randomIndex].$value);
				}
			}
			return newArr;
		}
		var questions = randomize(obj.questions);
		var answers = randomize(obj.answers);
		for (var i = 0; i < answers.length; i++) {
			results = {};
			results.answer = answers[i];
			results.question = questions[i];
			resultsObj.push(results);
		}
		return resultsObj;
	}

})