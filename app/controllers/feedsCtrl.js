(
function (){
	function feedControllerfn($scope){
		$scope.feeddata = {};
	}

	angular.module('feeds').controller('feedCtrl', ['$scope',feedControllerfn]);
}
)();