console.log("Model Loaded");

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var CommentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    _user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    _post: {type: Schema.Types.ObjectId, ref: 'Post', required: true}
}, {timestamps: true})


mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');
