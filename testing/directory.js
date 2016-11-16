angular.module('directoryApp', ['ngAnimate', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider.state('home', {
            url: '/home'
            template: '<h1>Hello</h1>'
        });
    })
    .controller('directoryController', function(){

        var dirList = this;
        // Replace $scope with dirList

        dirList.toggle = false;
        
        dirList.list = [
            {name:'Scott', age:29, img:'https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg'},
            {name:'Ben', age:32, img:'https://s3.amazonaws.com/uifaces/faces/twitter/iannnnn/128.jpg'},
            {name:'Jimmy', age:31, img:'https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg'},
            {name:'Karen', age:23, img:'https://s3.amazonaws.com/uifaces/faces/twitter/sillyleo/128.jpg'}
        ];

        dirList.addPerson = function() {
            dirList.list.push({name:dirList.name, age:dirList.age});
            dirList.name = '';
            dirList.age = 0;
        };
    });