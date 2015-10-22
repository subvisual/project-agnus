Meteor.methods({
  deleteSurvey: function(surveyId) {
    return Surveys.remove(surveyId);
  }
});
