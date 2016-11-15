app.factory('postFactory', ['$http', function($http){
    var factory = {}

    factory.addPost = function(post, callback){
        $http.post('/posts', post).then(function(data){
            callback(data.data);
        });
    }

    return factory;
}]);
