(
    function () {
    	'use strict';

    	function formFeedfn(feedService){
			// Runs during compile
			return {
				restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
				templateUrl: '../../html/form-data.html',
				replace: true,
				controller: function($scope, $element, $attrs, $transclude) {
					$scope.publish = function(){
						var input = {"content":$scope.content,"publishDate":$scope.publishDate};
						$scope.$broadcast("feeddata", {data:input});

						feedService.publishFeedApi(input).then(
							function(response) {
								$scope.content = "";
								$scope.publishDate = "";
							}
						).catch(function(error) {});
					}
				},
				link: function($scope, iElm, iAttrs, controller) {
					$scope.content = "";
					$scope.publishDate = "";
				}
			};
		}
		angular.module('feeds').directive('formFeed', ['feedService', formFeedfn]);
	}
)();