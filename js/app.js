/**
 * 实例化angular 并初始化
 * */

define(['angularAMD','angular-route','httpService-module','util-module','platformRoute-module'], function(angularAMD){
	
	//angular模块对象
	var app = angular.module('ngreq-app', ['ngRoute','HttpServicesModule','UtilModule','PlatformRoutemModule']);	

	//初始配置参数
	app.config(function($routeProvider,$locationProvider,$platformRouteProvider){
		
		var platformRoute = $platformRouteProvider.getPlatformRouteList();
		
		if(!angular.isUndefined(platformRoute) && platformRoute.length > 0) {
			//生成平台angular路由路径
			for(var i = 0; i < platformRoute.length; i++) {
				$routeProvider
					.when(platformRoute[i].path, angularAMD.route({
						templateUrl		: platformRoute[i].templateUrl, 
						controller		: platformRoute[i].controller, 
						controllerUrl	: platformRoute[i].controllerUrl, 
						title			: platformRoute[i].title,
						resolve			:	{
							$user	:	function(InitServices){
								return InitServices.getUser();
							}
						}
					}))
			}
		}
		$routeProvider.when('/error', angularAMD.route({
			templateUrl: 'views/error.html',				
			title: '错误页面',
			isAuth: false
		}))
		.otherwise({redirectTo: '/error'});
	});


	//全局运行事件
	app.run(function($rootScope,$routeParams,$location){		
		
		$rootScope.$on('$routeChangeStart', function(event, next){
					
		}); 
		
		$rootScope.$on('$routeChangeSuccess', function(event, next){
			
		});
		
	});		
						
		
	angularAMD.bootstrap(app);
		
	
	return app;
	
});

