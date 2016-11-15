console.log("Controller loaded");

var mongoose = require('mongoose');
var Topic = mongoose.model("Topic");
var User = mongoose.model("User");

function TopicController() {
    this.showAll = function(req, res) {
        Topic.find({}).populate('posts').populate('_user')
        .exec(function(err, topics){
            if(err){console.log(err);}
            return res.json(topics);
        });
    };
    this.create = function(req, res) {
        User.findOne({_id: req.body._user}, function(err, user){
            var topic = new Topic(req.body);
            topic.save(function(err){
                if(err){
                    console.log(err);
                    return res.json(err);
                }
                else {
                    user.topics.push(topic);
                    user.save();
                    return res.json(topic);
                }
            });
        });
    };
    this.show = function(req, res) {
        Topic.findOne({_id: req.params.id})
        .populate({
            path: 'posts',
            model: 'Post',
            populate:
            [{
                path: '_user',
                model: 'User'
            },
            {
                path: 'comments',
                model: 'Comment',
                populate: {
                    path: '_user',
                    model: 'User'
                }
            }]
        })
        .populate('_user')
        .exec(function(err, topics){
            if(err){console.log(err);}
            return res.json(topics);
        });
    };
}

module.exports = new TopicController();
