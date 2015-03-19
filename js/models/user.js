AdventistAudio.User = DS.Model.extend({
	username: DS.attr('string'),
	sermons: DS.hasMany('usersermon')
});

//This class keeps track of playback position
AdventistAudio.Usersermon = DS.Model.extend({
	user: DS.belongsTo('user'),
	sermon: DS.belongsTo('sermons'),
	currentpos: DS.attr('number')
});