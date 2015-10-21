Template.questionsEdit.helpers({
  question: function() {
    var questionId = Router.current().params.id;

    return Questions.findOne({_id: questionId});
  }
});
