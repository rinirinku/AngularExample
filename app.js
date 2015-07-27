angular.module('reddit', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('reddit').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('list', {
        url: '/list',
        templateUrl: 'partial/list/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('reddit').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
