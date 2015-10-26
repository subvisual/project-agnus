Meteor.methods({
  deleteSurvey: function(surveyId) {
    if (!this.userId)
      return;
    return Surveys.remove(surveyId);
  }
});
