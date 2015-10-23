Template.surveysReply.helpers({
  questions: function() {
    var questions = [];

    var surveyId = Router.current().params.id;
    var questionIds = Surveys.findOne({_id: surveyId}).questions;

    questionIds.forEach(function(id) {
      questions.push(Questions.findOne({_id: id}));
    });

    return questions;
  },

  surveyName: function() {
    var surveyId = Router.current().params.id;

    return Surveys.findOne({_id: surveyId}).name;
  }
});
