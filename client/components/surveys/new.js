var questions = [];

Template.surveysNew.helpers({
  questions: function() {
    return Questions.find();
  }
});

Template.surveysNew.onRendered(function() {
  dragula([document.querySelector('#questions'), document.querySelector('#survey')])
    .on('drop', function (el) {
      questions.push(el.dataset.id);
    });
});

AutoForm.hooks({
  newSurveyForm: {
    before: {
      'insert': function (doc) {
        doc.questions = questions;
        return doc;
      }
    }
  }
});
