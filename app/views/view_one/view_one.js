/**
 * Created by Sergey on 10.05.2016.
 */
'use strict';

angular
    .module('angularSeed.view_one', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: './app/views/view_one/view_one.html',
            controller: 'ViewOneCtrl',
            title: 'View-One'
        });
    }])
    .controller('ViewOneCtrl', function($scope) {


    });