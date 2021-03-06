'use strict';

angular.module('jhipsterApp')
    .factory('Animal', function ($resource) {
        return $resource('api/animals/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            }
        });
    });
