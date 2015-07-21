
define(['app'], function(app) {

	//当一个数组循环完毕后推送一个事件，控制器中可以监听这个事件，
	app.register.directive('onRepeatLastDirective', function ($timeout) {  
		return {    
			restrict: 'A',    
			link: function(scope, element, attr) {      
				if (scope.$last === true) {        
					$timeout(function() {          
						scope.$emit('ngRepeatLastLoad',element);        
					});      
				}    
			}  
		};
	});
	
});