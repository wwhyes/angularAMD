
define(['app','mobiscroll-datetime'], function(app) {
	app.register.directive('onSelectDateDirective', function () {  
		/**
		 * 在控制器取值中请使用$scope.selectdate
		 * 如果想选择日期后回调请在控制器中实现dateChange()方法即可
		 * 调用页面需要导入<link rel="stylesheet" type="text/css" charset="utf-8" href="css/mobiscroll.min.css"></link>
		 * */
		return {    
			restrict: 'E',    
			template: "<input ng-change='dateChange()' type='text' ng-model='selectdate' mobiscroll-date=\"{ setText: '确定',cancelText: '取消',dateFormat: 'yy-mm-dd',dateOrder: 'yymmdd',endYear:2020}\" />",
			replace: true
		};
	});
	
});