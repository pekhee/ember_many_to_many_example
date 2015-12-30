import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

var resources = function(router, resourceName) {
  router.route(resourceName, function() {
    this.route("create", {path: "new"});
    this.route("show",   {path: ":id"});
    this.route("update", {path: ":id/edit"});
    this.route("delete", {path: ":id/delete"});
  });
};

Router.map(function() {
  resources(this, "posts");
  resources(this, "tags");
});

export default Router;
