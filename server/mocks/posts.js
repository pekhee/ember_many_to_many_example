/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    console.log("Query: ", req.query);
    res.send({
      'posts': [
        {
          id: 1,
          title: "Title 1",
          body: "Body 1",
          tags: [1, 2]
        },
        {
          id: 2,
          title: "Title 2",
          body: "Body 2",
          tags: [3, 4]
        }
      ]
    });
  });

  postsRouter.post('/', function(req, res) {
    console.log("Body: ", req.body);
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id,
        title: "Title 1",
        body: "Body 1",
        tags: [1, 2]
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    console.log("Body: ", req.body);
    res.send({
      'posts': {
        id: req.params.id,
        title: "Title 1",
        body: "Body 1",
        tags: [1, 2]
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', require('body-parser').json());
  app.use('/api/posts', postsRouter);
};
