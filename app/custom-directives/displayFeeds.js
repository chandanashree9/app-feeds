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
					var array = [];
					$scope.$on("feeddata",function(event,args){
						array = $scope.datalist;
						if(args.data) {
							array.unshift({
				            	"content":args.data.content,
				            	"publishDate":args.data.publishDate
				        	});
				        	$scope.datalist = sortbyPublication(array);
						}
					});
					feedService.fetchFeedApi().then(
						function(response) {
							if(response != undefined && response != null) {
								if(response.number_of_records > 0) {
									$scope.datalist = sortbyPublication(response.feeds.concat(array));
								}
							}
						}
					).catch(function(error) {}
					);					
				}
			};
		}

		function sortbyPublication(inputarray) {
			if(inputarray.length > 1) {
	            inputarray.sort(function(a,b){
					var c = new Date(a.publishDate);
					var d = new Date(b.publishDate);
					return d-c;
				});
	        }
            return inputarray;
        }
		angular.module('feeds').directive('displayFeed', ['feedService', displayFeedfn]);
	}
)();