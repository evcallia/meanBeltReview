console.log("Controller loaded");

var mongoose = require('mongoose');
var Comment = mongoose.model("Comment");
var Post = mongoose.model("Post");
var User = mongoose.model("User");

function CommentController() {
    this.create = function(req, res) {
        Post.findOne({_id: req.body._post}, function(err, post){
            if(err){console.log(err);}
            User.findOne({_id: req.body._user}, function(err, user){
                var comment = new Comment(req.body);
                comment.save(function(err){
                    if(err){
                        return res.json(err);
                    }else {
                        post.comments.push(comment);
                        post.save(function(err){
                            if(err){console.log(err);}
                            user.comments.push(comment);
                            user.save();
                            res.json(comment);
                        })
                    }
                });
            });
        });
    };
}

module.exports = new CommentController();
