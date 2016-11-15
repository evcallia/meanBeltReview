console.log("Model Loaded");

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    topics: [{type: Schema.Types.ObjectId, ref: 'Topic', default: []}],
    posts: [{type: Schema.Types.ObjectId, ref: 'Post', default: []}],
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment', default: []}]
}, {timestamps: true})

mongoose.model('User', UserSchema);
var User = mongoose.model('User');

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
