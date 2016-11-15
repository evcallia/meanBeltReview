console.log("Controller loaded");

var mongoose = require('mongoose');
var Post = mongoose.model("Post");
var Topic = mongoose.model("Topic");
var User = mongoose.model("User");

function PostController() {
    this.create = function(req, res) {
        Topic.findOne({_id: req.body._topic}, function(err, topic){
            if(err){console.log(err);}
            User.findOne({_id: req.body._user}, function(err, user){
                if(err){console.log(err);}
                var post = new Post(req.body);
                post.save(function(err){
                    if(err){
                        return res.json(err);
                    }else {
                        topic.posts.push(post);
                        topic.save(function(err){
                            if(err){console.log(err);}
                            user.posts.push(post);
                            user.save();
                            res.json(post);
                        })
                    }
                });
            })
        });
    };
}

module.exports = new PostController();
