var questions = [];

Template.surveysNew.helpers({
  questions: function() {
    return Questions.find();
  },

  username: function() {
    if (!Meteor.user())
      return;

    return Meteor.user().profile.name;
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
