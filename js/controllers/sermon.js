AdventistAudio.SermonsController = Ember.ArrayController.extend({
  itemController: 'sermon',

});

AdventistAudio.SermonController = Ember.ObjectController.extend({
  needs: ['player'],
  actions: {
    playSermon: function() {
      var currentPos;
      //See if we have user data or not
      if(this.model.get('usersermon'))
        currentPos = this.model.get('usersermon').currentpos;
      else
      {
        var usersermon = this.store.createRecord('usersermon', {
          sermon: this.model,
          currentpos: 0
        });
      }

      this.get('controllers.player').play(this.model);
    }
  }
});