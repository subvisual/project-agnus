Picker.route('/API/dailyReport/all', function(params, req, res, next) {
  if (!validUser(params.query.user_name))
    return res.end(DailyReport.errors.unauthorizedUser(params.query.user_name));

  Meteor.call('dailyReport:sendToAll', params.query.token, function(error, response) {
    res.end(DailyReport.messages.sendToAll());
  });
});

function validUser(username) {
  let allowedUsers = ['justo', 'lauraesteves'];

  return _.contains(allowedUsers, username);
}
