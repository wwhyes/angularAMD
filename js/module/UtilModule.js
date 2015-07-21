define(['httpService-module'],function(){
	angular.module("UtilModule", ['HttpServicesModule'])
		.service('InitServices', function(httpServices) {	
		
			var self = this;
			
			self.getUser = function(_params, _success, _error) {
				return httpServices.resolveAjax(_params, _success, _error, "get", "js/module/test.json");
			}			
				
			return self;
		})		
});

