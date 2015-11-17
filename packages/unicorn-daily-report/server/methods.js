Meteor.methods({
  'dailyReport:sendToAll': function(token) {
    if (!Token.valid(token))
      return;

    let getUsers = Meteor.bindEnvironment(Headquarters.member.all);
    let sendSlackMessage = Meteor.bindEnvironment(_.partial(Meteor.call, 'slack:sendMessage', token));

    getUsers().then(users => {
      sendSlackMessage(_.map(users, generateReportMessage));
    });
  },

  'dailyReport:submit': function(form) {
    DailyReports.insert(form);
  }
});

function generateReportMessage(user) {
  let link = SlackMessage.formatLink(Meteor.settings.forms.dailyReport, 'form');
  let content = DailyReport.messages.fillForm(user.name, link);

  return new SlackMessage(user.slack_handler, content);
}
