/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var tagsRouter = express.Router();

  tagsRouter.get('/', function(req, res) {
    console.log("Query: ", req.query);
    res.send({
      'tags': [
        {
          id: 1,
          name: "Tag 1",
          posts: [1]
        },
        {
          id: 2,
          name: "Tag 2",
          tags: [1]
        },
        {
          id: 3,
          name: "Tag 3",
          posts: [2]
        },
        {
          id: 4,
          name: "Tag 4",
          posts: [2]
        }
      ]
    });
  });

  tagsRouter.post('/', function(req, res) {
    console.log("Body: ", req.body);
    res.status(201).end();
  });

  tagsRouter.get('/:id', function(req, res) {
    res.send({
      'tags': {
        id: req.params.id,
        name: "Tag 1",
        tags: [1]
      }
    });
  });

  tagsRouter.put('/:id', function(req, res) {
    console.log("Body: ", req.body);
    res.send({
      'tags': {
        id: req.params.id,
        name: "Tag 1",
        tags: [1]
      }
    });
  });

  tagsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tags', require('body-parser').json());
  app.use('/api/tags', tagsRouter);
};
