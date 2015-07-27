(function(){
angular.module('reddit').controller('ListCtrl',function($scope,listservice){
	var vm = this;
    listservice.doRequest().then(function(response){
    	//console.log(response);

    	vm.listurl = response.data.ydata.children;
    });
    // console.log("Success controller");
    // console.log(vm.listurl);

});	

}());
