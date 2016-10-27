(
    function () {
    	'use strict';

    	function displayFeedfn(feedService){
			return {
				priority: 1,
				restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
				templateUrl: '../../html/display-data.html',
				replace: true,
				controller: function($scope, $element, $attrs, $transclude) {
					$scope.sort = function(keyname){
							$scope.sortKey = keyname;   //set the sortKey to the param passed
							$scope.reverse = !$scope.reverse; //if true make it false and vice versa
					}
				},
				link: function($scope, iElm, iAttrs, controller) {
					$scope.datalist = [];
					$scope.$on("feeddata",function(event,args){
						if(args.data) {
							$scope.datalist.unshift({
				            	"content":args.data.content,
				            	"publishDate":args.data.publishDate
				        	});
						}
					});
					feedService.fetchFeedApi().then(
						function(response) {
							if(response != undefined && response != null) {
								if(response.number_of_records > 0) {
									$scope.datalist.push.apply($scope.datalist,response.feeds);
									console.log($scope.datalist);
								}
							}
						}
					).catch(function(error) {}
					);
				}
			};
		}
		angular.module('feeds').directive('displayFeed', ['feedService', displayFeedfn]);
	}
)();