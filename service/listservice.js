(function(){

angular.module('reddit').factory('listservice', ['$http', function($http) {

	var listservice = {};

	 listservice.doRequest = function() {
      return $http.get('http://www.reddit.com/r/webdev.json').
	  success(function(data, status, headers, config) {
	    // this callback will be called asynchronously
	    // when the response is available
	    console.log("Success");
	    console.log(data);
	  }).
	  	error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	    	    console.log("Error"+data);

	  	});
    }
    return listservice;
}]);


}());