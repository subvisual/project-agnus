Template.questions.helpers({
  questions: function() {
    return Questions.find().fetch();
  }
});

Template.questions.onRendered(() => {
  setTimeout(() => {
    $('.tooltipped').tooltip({delay: 50});
  }, 100);
});
