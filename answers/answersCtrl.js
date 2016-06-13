angular.module('gameApp')
    .controller('answersCtrl', function($scope, fb, $firebaseArray, $stateParams, $state) {

        var answers = new Firebase(fb.gamesRef + "/" + $stateParams.id + '/answers');
        var answersUrl = $firebaseArray(answers);

        $scope.gameName = $stateParams.id;

        $scope.addAnswers = function(newObj) {
            var test = [];
            for (item in newObj) {
                test.push(newObj[item])
            }
            if (test.length === 5) {
                for (key in newObj) {
                    if (newObj[key]) {
                        answersUrl.$add(newObj[key]);
                    }
                }
                $state.go('results', {
                    id: $scope.gameName
                });
            }
        }
    })