app.factory('commentFactory', ['$http', function($http){
    var factory = {}

    factory.addComment = function(post, callback){
        $http.post('/comments', post).then(function(data){
            callback(data.data);
        });
    }

    return factory;
}]);
