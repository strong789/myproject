require(['jquery','angular','ngRoute','bootstrap'],function($,angular){
	var app = angular.module('httpApp',['ngRoute']);
	app.controller('http',['$scope', '$http',function($scope,$http){
		$scope.message = '';
		var myData = {'mobile':'15620827374','pwd' : '201125'};
		var toparams = function ObjecttoParams(obj) {
		    var p = [];
		    for (var key in obj) {
		        p.push(key + '=' + encodeURIComponent(obj[key]));
		    }
		    return p.join('&');
		};
		var req = {
		 method: 'POST',
//		 url: 'http://182.92.115.116:8521/pc/v1/getUserInfoList',
		 url: 'http://182.92.115.116:8521/login/sso',
		 headers: {
		   'Content-Type': 'application/x-www-form-urlencoded'
		 },
//		 params: { 
//		 		 pageNum:1,
//				 pageCount:20,
//				 role_id:201,
//				 uid:13190,
//				 ssotoken:'token7a4ac014-56cf-475a-a191-119c96620ae9F11JXQcT',
//			}
		 data:toparams(myData)
		}
		$http(req).then(function successCallback(response){
			console.log(response);
		}, function errorCallback(response){
			console.log('请求失败');
			$scope.message ='请求失败';
		});
	}]);
	angular.bootstrap(document, ['httpApp']);//手动启动angularjs
   	return app;
});