Template.answerButtons.events({
  'click .radio': function(event, template) {
    var scores = template.data.scores.get();
    var value = template.$('input:checked').val();

    scores[template.data.questionId] = value;

    template.data.scores.set(scores);
  }
});
