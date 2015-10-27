Meteor.publish('surveys', () => {
  return Surveys.find();
});

Meteor.publish('survey', (id) => {
  return Surveys.find({_id: id});
});
