Meteor.methods({
  sendSlackMessage: function(target, content) {
    content = 'http://agnus.meteor.com' + content
    var data = {
      channel: target,
      username: Meteor.settings.slack.username,
      text: content
    };

    HTTP.post(Meteor.settings.slack.messageUrl, { data: data });
  }
});
