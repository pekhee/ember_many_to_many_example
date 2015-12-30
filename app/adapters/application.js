import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: "api",
  shouldReloadAll: function() {
    return false;
  },
  shouldBackgroundReloadRecord: function() {
    return true;
  }
});
