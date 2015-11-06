Meteor.methods({
  'slack:sendMessage': function(token, ...messages) {
    if (!this.userId && !Token.valid(token) || !messages.length)
      return;

    return _.chain(messages)
      .flatten()
      .each(Meteor.bindEnvironment(sendMessage));
  }
});

function sendMessage(message) {
  if (!validMessage(message))
    return

  try {
    HTTP.post(Meteor.settings.slack.messageUrl, { data: message });
  } catch(error) {
    console.log(error);
  }
}

function validMessage(message) {
  return message.text && message.channel && message.username;
}
