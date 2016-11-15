app.factory('userFactory', ['$http', function($http){
    var factory = {}
    var user;

    factory.login = function(username, success, error){
        $http.post('/login', {username: username}).then(function(data){
            if(data.data.username){
                user = data.data;
                success(user);
            }else{
                error(data);
            }
        });
    }

    factory.getUser = function(callback){
        callback(user);
    }

    factory.getUserById = function(id, callback){
        $http.get(`/users/${id}`).then(function(data){
            callback(data.data);
        })
    }

    factory.logout = function(){
        user = null;
    }

    return factory;
}]);
