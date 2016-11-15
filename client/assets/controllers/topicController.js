app.controller('topicController', ['$scope', 'userFactory', '$location', 'topicFactory', '$routeParams', 'postFactory', 'commentFactory', function($s, uf, $l, tf, $r, pf, cf){
    $s.user;
    $s.topics = [];
    $s.showTopic;

    uf.getUser(function(u){
        if(u){
            $s.user = u;
        }else{
            $l.url('login');
        }
    });

    if($r.id){
        tf.getTopicById($r.id, function(rTopic){
            $s.showTopic = rTopic;
        });
    }else{
        tf.getAllTopics(function(allTopics){
            $s.topics = allTopics;
        });
    }

    $s.addTopic = function(){
        $s.topic._user = $s.user._id;
        tf.addTopic($s.topic,function(nTopic){});
    }

    $s.addPost = function(){
        $s.post._user = $s.user._id;
        $s.post._topic = $s.showTopic._id;
        pf.addPost($s.post, function(nPost){
            nPost._user = $s.user;
            $s.showTopic.posts.push(nPost);
            $s.post = {};
        });
    }

    $s.addComment = function(comment, post){
        comment._user = $s.user._id;
        comment._post = post._id;
        cf.addComment(comment, function(nComment){
            nComment._user = $s.user;
            post.comments.push(nComment)
            comment.body = null;
        });
    }

    $s.logout = function(){
        uf.logout();
        $l.url('/login');
    }
}]);
