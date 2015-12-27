/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var tagsRouter = express.Router();

  tagsRouter.get('/', function(req, res) {
    res.send({
      '/tags': []
    });
  });

  tagsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  tagsRouter.get('/:id', function(req, res) {
    res.send({
      '/tags': {
        id: req.params.id
      }
    });
  });

  tagsRouter.put('/:id', function(req, res) {
    res.send({
      '/tags': {
        id: req.params.id
      }
    });
  });

  tagsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/-tags', require('body-parser'));
  app.use('/api/-tags', tagsRouter);
};
