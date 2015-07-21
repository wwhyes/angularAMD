/**
 * require启动配置。
 * versions 2.0 2014-11-12
 * author Leon
 * */
require.config({
	
	baseUrl: 'js', 
	
	paths: {		
		'angular-route'					: '../lib/angular-route.min',
		'angularAMD'					: '../lib/angularAMD.min',
		'mobiscroll-datetime'			: '../lib/mobiscroll.min',			//日期选择控件，
		'httpService-module'			: 'module/HttpServicesModule',
		'reqErrCode-module'				: 'module/ReqErrorCodeModule',
		'util-module'					: 'module/UtilModule',
		'platformRoute-module'			: 'module/PlatformRouteModule'

	},
	
	
	deps: ['app']
});

