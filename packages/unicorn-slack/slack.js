Meteor.methods({
  sendSlackMessage: function(target, content) {
    if (!this.userId)
      return;

    sendMessage(target, content);
  },

  sendToMultipleUsers: function() {
    var contentLink = 'Please fill in this <' + Meteor.settings.forms.dailyReport + '|form>.';

    var send = Meteor.bindEnvironment(sendMessage);
    var getMembers = Meteor.bindEnvironment(Headquarters.member.all);

    getMembers().then(function(members) {
      members.forEach(function(user) {
        var greetings = 'Hey ' + user.name + '!\n';

        if (user.slack_handler === '@justo')
          send(user.slack_handler, greetings + contentLink + '\nThank you :smile:');
      });
    });
  }
});

function sendMessage(target, content, callback) {
  var data = {
    channel: target,
    username: Meteor.settings.slack.username,
    text: content
  };

  try {
    HTTP.post(Meteor.settings.slack.messageUrl, { data: data }, callback);
  } catch(e) {
    console.log(e);
  }
}
