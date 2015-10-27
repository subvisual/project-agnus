Meteor.publish('questions', () => {
  return Questions.find();
});

Meteor.publish('question', (id) => {
  return Question.find({_id: id});
});
