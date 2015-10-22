Template.surveysEdit.helpers({
  survey: function() {
    var surveyId = Router.current().params.id;

    return Surveys.findOne({_id: surveyId});
  },

  questionDescription: function(id) {
    return Questions.findOne({_id: id}).description;
  },

  index: function(index) {
    return index + 1;
  }
});
