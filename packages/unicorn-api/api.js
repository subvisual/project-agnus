Picker.route('/API/report', function(params, req, res, next) {
  Meteor.call('sendToMultipleUsers', function(error, response) {
    res.end('Hi! I just requested the whole team to submit their reports :smile:');
  });
});
