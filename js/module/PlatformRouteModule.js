define([],function(){
	angular.module("PlatformRoutemModule",[])
	.provider("$platformRoute", function(){
		
		/**
		 * 平台路由配置
		 * */
		this.getPlatformRouteList = function() {
			return [
			    	{
			    		"path"			: "/",
			    		"templateUrl"	: "views/home.html", 
			    		"controller"    : "HomeController", 
			    		"controllerUrl" : "controller/home_ctrl", 
			    		"title"			: "测试首页"
			    	}
			    	
			    	
			    ]
		}
		
		 this.$get = function() { 						
			
		 }
		
		return this;
	});
		
});

