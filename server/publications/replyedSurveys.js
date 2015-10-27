Meteor.publish('replyedSurveys', () => {
  return ReplyedSurveys.find();
});
