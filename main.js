require.config({
//	baseUrl : 'js',
	paths: {
//		'app' : 'app',
		'jquery' : 'js/jquery',
		'angular' : 'js/angular',
		'ngRoute' : 'js/angular-route',
		'vue' : 'js/vue',
		'bootstrap' : 'js/bootstrap/js/bootstrap'
	},
	//依赖关系
	shim : {
//		'app': {
//          deps: ['angular']
//     	},
		'angular' : { exports: 'angular' },
		'ngRoute' : { deps: ['angular']},
		'bootstrap' : {
			deps: ['jquery']
		}
	}
});

//require(['app'], function(){
//	 alert("dsadas");
//  angular.bootstrap(document, ['todoApp']);//手动启动angularjs
// 
//});
//require(['angular'], function(angular){
//  console.info(angular.version);
//});