'use strict';

function AppController($scope, ClientServices){

    $scope.endpoint = 'users';
    $scope.items = [];
    $scope.searchText = '';

    ClientServices.list($scope.endpoint).then(function(response){
        $scope.items = response['data'];
    });

    $scope.$on('$routeChangeSuccess', function (event, data) {
        if(!angular.isUndefined(data.meta)){
            $scope.title = data.meta.title;
        }
    });
    
}

App.controller('AppController', [
    '$scope',
    'ClientServices',
    AppController
]);
