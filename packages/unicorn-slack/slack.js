Meteor.methods({
  sendSlackMessage: function(target, content) {
    if (!this.userId)
      return;

    sendMessage(target, content);
  },

  sendToMultipleUsers: function() {
    var content = Meteor.settings.forms.dailyReport;

    var send = Meteor.bindEnvironment(sendMessage);
    var getMembers = Meteor.bindEnvironment(Headquarters.member.all);

    return getMembers().then(function(members) {
      members.forEach(function(user) {
        if (user.slack_handler === '@justo' || user.slack_handler === '@lauraesteves')
          send(user.slack_handler, content);
      });

      return members;
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
