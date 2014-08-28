/*
	Factories for my app.

	A not so formal definition (explanation) yet pretty short and awesome for a factory is:

	Factory: the function that you write will be invoked.

	Taken from: 

	http://stackoverflow.com/questions/14324451/angular-service-vs-angular-factory
*/

angular.module('angular-do')
  .factory('$provincesService', function ($resource) {
    return $resource('http://localhost:8080/provinces', {id:'@id'});
  });