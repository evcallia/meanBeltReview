app.controller('userController', ['$scope', 'userFactory', '$location', '$routeParams', function($s, uf, $l, $r){
    $s.user;
    $s.showUser;

    uf.getUser(function(u){
        if(u){
            $s.user = u;
        }else{
            $l.url('login');
        }
    });

    uf.getUserById($r.id, function(sUser){
        $s.showUser = sUser;
    });
}]);
