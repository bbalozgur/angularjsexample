'use strict';

App.factory('ClientServices', function($http){
    return {
        add: function(endpoint, data){
            $http.defaults.headers.post['Content-Type'] = 'application/json';
            return $http.post(BASE_URL + '/' + endpoint + '/', data).then(function(response){
                return response['data']
            });
        },
        update: function(endpoint, id, data){
            return $http.put(BASE_URL + '/' + endpoint + '/' + id, data).then(function(response){
                return response['data']
            });
        },
        delete: function(endpoint, id){
            return $http.delete(BASE_URL + '/' + endpoint + '/' + id).then(function(response){
                return response
            })
        },
        get: function(endpoint, id){
            return $http.get(BASE_URL + '/' + endpoint + '/' + id).then(function(response){
                return response['data']
            })
        },
        list: function(endpoint, params){
            return $http({
                method: 'GET',
                url: BASE_URL + '/' + endpoint + '/',
                params: params
            }).then(function(response){
                return response
            })
        }
    }
});
