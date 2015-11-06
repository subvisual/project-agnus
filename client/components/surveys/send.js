Template.surveysSend.helpers({
  users: function() {
    return Template.instance().users.get();
  },

  ready: function() {
    return Template.instance().ready.get();
  },

  slack: function(slackHandler) {
    if (!slackHandler)
      return

    if (slackHandler[0] !== '@')
      return '@' + slackHandler;
    else
      return slackHandler;
  }
});

Template.surveysSend.onCreated(function() {
  var self = this;
  self.users = new ReactiveVar();
  self.ready = new ReactiveVar(false);

  Meteor.call('hq:getUsers', function(err, response) {
    if (err)
      return;

    self.users.set(response);
    self.ready.set(true);
  });

  Tracker.autorun(function() {
    if (self.ready.get()) {
      setTimeout(function() {
        $('select').material_select();
      }, 100);
    }
  });
});

Template.surveysSend.events({
  'click #send': function(event, template) {
    var userEmail = '';
    var users = template.users.get();
    var surveyId = Router.current().params.id;
    var slackHandler = template.$('select').val();

    users.forEach(function(user) {
      if (user.slack_handler === slackHandler)
        userEmail = user.email;
    });

    let surveyURL = 'http://agnus.meteor.com' + Router.path('surveys.reply',{id: surveyId, userEmail});
    let message = new SlackMessage(slackHandler, surveyURL);

    Meteor.call('slack:sendMessage', '', message);
  }
});
