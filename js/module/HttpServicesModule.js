define(['reqErrCode-module'],function(){
	angular.module("HttpServicesModule", ['ReqErrorCodeModule'])
		.factory('httpServices', function($http, $q, $location,errorServices) {		
		
			var self = this;
			
			self.ajax = function(_params, _successCallback, _errorCallback, _type, _url){
				if(angular.isFunction(_params)) {
					_errorCallback = _successCallback;
					_successCallback = _params;
					_params = '';
				}
				if(_type == 'post') {
					$http.post(_url, angular.toKeyValue(_params))
						.success(function(data){
							if(angular.isUndefined(data._code) || data._code == 0) {
								_successCallback(data, status);
							} else {
								//layer.show(data);
								alert(errorServices.msg(data))
								if(angular.isFunction(_errorCallback)) {
									_errorCallback(data, status);
								}
							}
						})
						.error(function(data){
							if(status == 404) {
								$location.path('/error');
							}
						});
					
				} else if(_type == 'get') {
					$http.get(_url, {params:_params,withCredentials: true})
						.success(function(data, status){
							if(angular.isUndefined(data._code) || data._code == 0) {
								_successCallback(data, status);
							} else {					
								alert(errorServices.msg(data))
								//layer.show(data);
								if(angular.isFunction(_errorCallback)) {
									_errorCallback(data, status);
								}								
							}
						})
						.error(function(data){
							if(status == 404) {
								$location.path('/error');
							}
						});
				}
			}

			self.resolveAjax = function(_params, _successCallback, _errorCallback, _type, _url){
				if(angular.isFunction(_params)) {
					_errorCallback = _successCallback;
					_successCallback = _params;
					_params = '';
				}
				var d = $q.defer();
				$http.get(_url, {params:_params,withCredentials: true})
				  .then(function(response) {
					d.resolve(response.data)
				  }, function err(reason) {
					d.reject(reason);
				  });
				return d.promise;
		
			}
				
			return self;
		})		
		.config(function($httpProvider){
			$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
		})	
});

