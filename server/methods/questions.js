Meteor.methods({
  deleteQuestion: function(questionId) {
    if (!this.userId)
      return;

    return Questions.remove(questionId);
  }
});
