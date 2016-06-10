angular.module('gameApp')
.service( 'resultsSrv', function( $q ){
	
	this.combine = function(quest, ans){
		var result = [];
		for (var i = 0; i < quest.length; i++) {
			var obj = {}
			obj.question = quest[i];
			obj.answer = ans[i];
			result.push(obj);
		}
		// console.log("service", ans);
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

	this.makeArr = function( arr ){
		var newArr = [];
		for (var i = 0; i < arr.length; i++) {
			newArr.push(arr[i].$value);
		}
		return newArr;
	}
	this.randomObj = function( obj ){
		console.log(obj);
	}

})