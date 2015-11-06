Picker.route('/API/report', function(params, req, res, next) {
  Meteor.call('sendToMultipleUsers', function() {
    res.end('Success!');
  });
});
