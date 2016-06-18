angular.module('gameApp')
    .controller('questionsCtrl', function($scope, $firebaseArray, fb, $stateParams, $state) {

        var questions = new Firebase(fb.gamesRef + "/" + $stateParams.id + '/questions');
        var questionsUrl = $firebaseArray(questions);

        $scope.gameName = $stateParams.id;

        $scope.addQuestions = function(newObj) {
            var test = [];
            for (item in newObj) {
                test.push(newObj[item])
            }
            if (test.length === 5) {
                for (key in newObj)
                    if (newObj[key]) {
                        questionsUrl.$add(newObj[key]);
                    }
                $state.go('answers', {
                    id: $scope.gameName
                });
            }
        }
    });