Meteor.methods({
  deleteQuestion: function(questionId) {
    return Questions.remove(questionId);
  }
});
