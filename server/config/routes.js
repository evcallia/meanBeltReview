console.log("Routes Loaded");

var userController = require('../controllers/userController.js');
var topicController = require('../controllers/topicController.js');
var postController = require('../controllers/postController.js');
var commentController = require('../controllers/commentController.js');
module.exports = function(app){
    // access params with request.params.id
    // access form data with request.body

    app.post("/login", userController.login);
    app.get('/users/:id', userController.showUser);

    app.get('/topics', topicController.showAll);
    app.get('/topics/:id', topicController.show);
    app.post("/topics", topicController.create);

    app.post('/posts', postController.create);

    app.post('/comments', commentController.create);
}
