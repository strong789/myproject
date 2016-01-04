require(['jquery','angular','ngRoute','bootstrap'],function($,angular){
//	 var app = angular.module('todoApp', []);
//	 app.controller('TodoListController', function() {
//	    var todoList = this;
//	    todoList.todos = [
//	      {text:'learn angular', done:true},
//	      {text:'build an angular app', done:false}];
//	 
//	    todoList.addTodo = function() {
//	      todoList.todos.push({text:todoList.todoText, done:false});
//	      todoList.todoText = '';
//	    };
//	 
//	    todoList.remaining = function() {
//	      var count = 0;
//	      angular.forEach(todoList.todos, function(todo) {
//	        count += todo.done ? 0 : 1;
//	      });
//	      return count;
//	    };
//	 
//	    todoList.archive = function() {
//	      var oldTodos = todoList.todos;
//	      todoList.todos = [];
//	      angular.forEach(oldTodos, function(todo) {
//	        if (!todo.done) todoList.todos.push(todo);
//	      });
//	    };
// 	});
//	console.log(ngRoute);
	var app = angular.module('routeApp',['ngRoute']);
//	app.init = function(data){
//		console.log(data);
//	};
	var newsList = [
		{
			'id' : 1,
			'title' : 'title1',
			'content' : 'content1',
			'date' : new Date()
		},{
			'id' : 2,
			'title' : 'title2',
			'content' : 'content2',
			'date' : new Date()
		},{
			'id' : 3,
			'title' : 'title3',
			'content' : 'content3',
			'date' : new Date()
		},{
			'id' : 4,
			'title' : 'title4',
			'content' : 'content4',
			'date' : new Date()
		},{
			'id' : 5,
			'title' : 'title5',
			'content' : 'content5',
			'date' : new Date()
		},
	];
	//定义路由表
	function routeConfig($routeProvider){
		$routeProvider.
		when('/',{
			controller : 'ListController',
			templateUrl : 'list.html'
		}).
		when('/detail/:id',{
			controller : 'DetailController',
			templateUrl : 'detail.html'
		}).
		when('/edit/:id',{
			controller : 'EditController',
			templateUrl : 'edit.html'
		}).
		when('/list',{
			controller : 'ListController',
			templateUrl : 'list.html'
		}).
		when('/add',{
			controller : 'AddController',
			templateUrl : 'add.html'
		}).
			otherwise({
				redirectTo:'/'
			});
	}
	app.config(routeConfig);
	app.controller('ListController',function($scope){
		$scope.newsList = newsList;
		
	});
	app.controller('AddController',function($scope,$location){
		$scope.title = '';
		$scope.content = '';
		$scope.add = function(){
			newsList.push({
				id:newsList.length+1,
				title:$scope.title,
				content:$scope.content,
				date:new Date()
			});
			$location.path('list');
		};
		
	});
	app.controller('EditController',function($scope,$routeParams,$location){
		console.log($routeParams);
		$scope.news = newsList[$routeParams.id-1];
		$scope.update=function(){
			newsList[$routeParams.id-1] = $scope.news;
			$location.path('list');
		};
		
	});
	app.controller('DetailController',function($scope,$routeParams){
		 $scope.news = newsList[$routeParams.id-1];
	});
 	angular.bootstrap(document, ['routeApp']);//手动启动angularjs
   	return app;
});
