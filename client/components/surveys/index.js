Template.surveys.helpers({
  surveys: function() {
    return Surveys.find();
  },

  questionDescription: function(id) {
    var question = Questions.findOne({_id: id});

    if (!question || !question.description)
      return;

    return question.description;
  }
});

Template.surveys.onRendered(() => {
  setTimeout(() => {
    $('.collapsible').collapsible();
  }, 100);
})
