angular.module('LoginModule', [])

 .controller('LoginController', function ($scope, $rootScope, $location) {
   
     $rootScope.credential = [
         { username: 'steve', password: 'steve135', role: 'district' },
        { username: 'alex', password: 'alex135', role: 'school' },
        { username: 'adi', password: 'adi135', role: 'teacher' },
        { username: 'dan', password: 'dan135', role: 'school' },
     ]

 
     $scope.username = "";
     $scope.password = "";
  
     $scope.Login = function () {

         var exist = false;
         if ($scope.username.length > 0 && $scope.password.length > 0) {
             for (var i = 0; i < $rootScope.credential.length; i++)
             {
                // console.log(i);
                 if ($scope.username == $rootScope.credential[i].username && $scope.password == $rootScope.credential[i].password)
                 {

                   //  alert('Correct');
                     exist = true;
                  //  $location.path('/index.html')
                   //  $document.location.href = '/index.html';
                     // break;
                     //LoginController();
                 }
             }

         } else {
            alert('Username and password required!');
         }

         if (exist) { alert("correct"); } else { alert('username or password are wrong');}
     }
 });
//LoginController.$inject = ['$window','$scope'];
//function LoginController($window,$scope) {
//    if ($scope.exist) {
//        $window.location.href = '/index.html';

//    }
//};
