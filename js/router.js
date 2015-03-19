AdventistAudio.Router.map(function() {
  this.resource('sermons', { path: '/' });
  this.route("player", { path: "/player"});
});
AdventistAudio.PlayerRoute = Ember.Route.extend({
  controllerName: 'player'
});
AdventistAudio.SermonsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('sermons');
  },
  controllerName: 'sermons',
  renderTemplate: function() {
    this.render('sermons');
  }
});



