AdventistAudio.PlayerController = Ember.ObjectController.extend({
  sermon: {},
  play: function(sermon)
  {
    this.sermon = sermon;
    currentPos = sermon.get('usersermon').get('currentpos');
    $('audio').prop('src', sermon.get('file'));
    $('audio')[0].currentTime = currentPos;
    $('audio')[0].play();
  },
  updateTime: function(time)
  {
    globalThis = this;
    console.log(this);
    this.get('sermon').get('usersermon').set('currentpos', time);
    console.log(this.sermon.get('usersermon'));
  }
});
var globalThis;
AdventistAudio.PlayerView = Ember.View.extend({
  actions: {
    playpause: function(){
      if($('audio')[0].paused)
      {
        $('audio')[0].play();
      }
      else
        $('audio')[0].pause();
    }
  },
  didInsertElement: function(){
    var timeupdate = this.timeupdate;
    var localthis =  this;
    var controller = localthis.get('controller');
    $(function(){
      $('audio').on('timeupdate', timeupdate(controller));
    });
    return this._super();
  },
  timeupdate: function(controller){
    console.log('working');
    //Update progress bar
    //Calculate percentage
    var currentTime = $('audio')[0].currentTime;
    var totalTime = $('audio')[0].duration;
    var percent = currentTime / totalTime * 100;
    $('#player-location').css('width', percent.toString()+"%");
    //Update time remaining
    
    //Save time
    controller.updateTime(currentTime);
  }
});

