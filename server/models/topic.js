console.log("Model Loaded");

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var TopicSchema = new mongoose.Schema({
    title: {type: String, required: true },
    description: {type: String},
    category: {type: String},
    _user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    posts: [{type: Schema.Types.ObjectId, ref: 'Post', default: []}]
}, {timestamps: true})


mongoose.model('Topic', TopicSchema);
var Topic = mongoose.model('Topic');

//************** RELATIONSHIPS ****************

// var Schema = mongoose.Schema;
// var MessageSchema = new mongoose.Schema({
//     name: {type: String,required: true,minlength:4},
//     message: {type: String, required: true},
//     comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
// }, {timestamps: true})
//
// var CommentSchema = mongoose.Schema({
//     name: {type: String, required: true, minlength:4},
//     comment: {type: String, required: true},
//     _message: {type: Schema.Types.ObjectId, ref: 'Message', required: true}
// }, {timestamps: true});
//
// mongoose.model('Message', MessageSchema);
// mongoose.model('Comment', CommentSchema);
