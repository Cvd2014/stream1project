console.log("custom loads")

// create the module and name it stJohn
	var stJohn = angular.module('stJohn', ['ngRoute']);

	// configure our routes
	stJohn.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the dutys page
			.when('/duties', {
				templateUrl : 'pages/about.html',
				controller  : 'dutyController'
			})

			// route for the teaching page
			.when('/training', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	stJohn.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	stJohn.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	stJohn.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});