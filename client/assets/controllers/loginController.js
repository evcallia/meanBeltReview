app.controller('loginController', ['$scope', 'userFactory', '$location', function($s, uf, $l){

    $s.login = function(){
        uf.login($s.username, function(user){
             if(user){
                 $l.url('dashboard');
             }else{
                 //display errors
             }
        },
        function(err){
            console.log(err);
        });
    }
}]);
