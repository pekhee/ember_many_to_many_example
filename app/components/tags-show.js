import Ember from 'ember';

export default Ember.Component.extend({
  init: function() {
    this._super();
    this.set("mini", this.attrs.mini || false);
  },

  shouldLink: function() {
    if(this.get("link") == null) {
      return !this.get("mini")
    }

    return this.get("link");
  }.property("mini", "link"),

  shouldExpand: Ember.computed.not("mini")
});
