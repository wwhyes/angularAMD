
define([],function(){
	angular.module("ReqErrorCodeModule", [])
		.service('errorServices', function() {	
		
			var self = this;

			self.msg = function(data) {
				if(angular.isUndefined(data._code)) {
					return '服务器故障，请与管理员联系!';
				}
				var _msg = '';
				switch(data._code) {
					case 1 :
						_msg = "服务器异常";
						break;
					default :
						_msg = '错误代码: ' + data._code;
						break;
				}
				return _msg;
			}
				
			return self;
		})		
		
});

