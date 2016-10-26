(
	function(){
		'use strict';

		var feedServicefn=function($http,$q){
			var feedlist="";

			this.publishFeedApi = function(data){
				var dfd = $q.defer();
				console.log(data);
				$http.post('http://localhost:8081/app-feeds/feeds/publish',data,
					{
    					headers: { 
    						'Content-Type': 'application/json', 
    						'Accept':'text/plain'
    					}
					}
				).then(function(response) {
						countries = response.data;
						dfd.resolve(countries);
					}
				).catch(function(error) {
						console.log(error);
						dfd.reject(error);
					}
				);
				return dfd.promise;
			}

			this.fetchFeedApi = function(){
				var dfd = $q.defer();

				if(feedlist){
					dfd.resolve(feedlist);
				} else {
					$http.get('http://localhost:8081/app-feeds/feeds/list',
						{
        					headers: { 
        						'Accept': 'application/json'
        					}
						}
					).then(function(response) {
							feedlist = response.data;
							dfd.resolve(feedlist);
						}
					).catch(function(error) {
							dfd.reject(error);
						}
					);
				}
				return dfd.promise;
			}
		}
		angular.module('feeds').service('feedService', ['$http','$q',feedServicefn]);
	}
)();