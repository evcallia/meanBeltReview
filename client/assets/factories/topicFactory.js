app.factory('topicFactory', ['$http', function($http){
    var factory = {}
    var topics = [];

    factory.getAllTopics = function(callback){
        $http.get('/topics').then(function(data){
            topics = data.data;
            callback(topics);
        })
    }

    factory.addTopic = function(topic, callback){
        $http.post('/topics', topic).then(function(data){
            topics.push(data.data);
            callback(topics[topics.length -1]);
        })
    }

    factory.getTopicById = function(id, callback){
        $http.get(`/topics/${id}`).then(function(data){
            callback(data.data);
        })
    }

    return factory;
}]);
