var app = angular.module('MyApp',[]);

app.config(['$httpProvider', function($http) {  
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $http.defaults.transformRequest = function(data) {
        return $.param(data);
    };
}])

app.controller('ContatCtrl',function($scope,$http){
     $scope.title = 'CONTACT US';
     $scope.formData = {};
     
     $scope.send_mail = function(add)
     {
        console.log(add);
        var res = $http.post('http://localhost/aj-php-mail/mail.php',add);
        res.success(function(data){
            console.log(data);     
            return false;
        });
        return false;
     }
});