import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(model) {
      model.save();
    },
    destroy: function(model) {
      model.destroyRecord();
    }
  }
});
