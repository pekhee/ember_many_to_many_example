import Ember from 'ember';

export default Ember.Component.extend({
  init: function() {
    this._super();
    this.set("tags", "");
  },
  store: Ember.inject.service("store:main"),

  tagsArray: Ember.computed("tags", function() {
    return this.get("tags").split(/\s*,\s*/);
  }),

  actions: {
    save: function() {
      var tags = this.get("tagsArray").map( id => this.get("store").findRecord("tag", id));
      Ember.RSVP.all(tags).then( tags => {
        this.get("post.tags").then( rel => {
          rel.pushObjects(tags);
          this.sendAction("action", this.get("post"));
        });
      });
    }
  }
});
