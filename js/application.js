window.AdventistAudio = Ember.Application.create({
  customEvents: {
      // add support for the paste event
      timeupdate: 'timeupdate'
    }
});

AdventistAudio.ApplicationAdapter = DS.FixtureAdapter.extend();