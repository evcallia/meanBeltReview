console.log("Model Loaded");

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
    body: { type: String, required: true },
    upVotes: {type: Number, default: 0},
    downVotes: {type: Number, default: 0},
    _topic: {type: Schema.Types.ObjectId, ref: 'Topic', required: true},
    _user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Post', default: []}]
}, {timestamps: true})


mongoose.model('Post', PostSchema);
var Post = mongoose.model('Post');
