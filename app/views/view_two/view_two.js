/**
 * Created by Sergey on 10.05.2016.
 */
'use strict';

angular
    .module('angularSeed.view_two', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view-two', {
            templateUrl: './app/views/view_two/view_two.html',
            controller: 'ViewTwoCtrl',
            title: 'View-Two'
        });
    }])
    .controller('ViewTwoCtrl', function($scope) {


    });