define(['app','directive/onSelectDateDirective'], function(app) {

	app.register.controller('HomeController',function($user,$rootScope,$scope,$routeParams){
		
		$scope.name = $user.name;


	});

});
