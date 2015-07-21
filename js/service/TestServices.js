
define(['app'], function(app) {
	app.register.service('TestServices',function(httpServices){
		
		var self = this;
		
		//调用模版
		/*self.boards = function(_params, _successCallback, _errorCallback) {
			httpServices.ajax(_params, _successCallback, _errorCallback, 'get', '/eimp/bbs/mobile/boards4client');
		}*/
		
		return self;	
		
	});
	
});