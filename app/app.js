/**
 * Created by Sergey itsib.su@gmail.com on 10.05.2016.
 */
'use strict';

// Объявления приложения и модулей для представлений и компонент
angular
    .module('angularSeed', [
        // Сторонние модули
        'ngRoute',
        'ngAnimate',

        // Модули представлений
        'angularSeed.view_one',
        'angularSeed.view_two'
    ])

    // Конфигурация приложения
    .config(['$routeProvider', '$httpProvider' ,'$locationProvider',
        function($routeProvider, $httpProvider, $locationProvider) {

            //Используем html5 router, когда точка входа идёт на старт приложения
            $locationProvider.html5Mode(true);

            // Использование для кроссдоменных платформ
            //$httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
            //$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            //delete $httpProvider.defaults.headers.common['X-Requested-With'];

            // Добавление заголовков
            //$httpProvider.interceptors.push(function (){
            //    return {
            //        request: function (request) {
                        //request.headers['SESSION'] = session;
            //            return request;
            //        },
            //       response: function (response){
            //            return response;
            //        },
            //        responseError: function (response) {
            //            return response;
            //        }
            //    }
            //});

            // Eсли стр нет то выкинет в корень
            $routeProvider.otherwise({redirectTo: '/'});


        }
    ])

    //На каждое удачно изменение роутера мы обновляем router, который можно использовать в любом тимплейте {{router}}
    .run(['$rootScope','$location', function($rootScope, $location) {

        $rootScope.router = $location.path();
        $rootScope.$on('$routeChangeSuccess', function (event, current) {


            $rootScope.router = $location.path();
            $rootScope.current = current.$$route;
        });
    }]);
