Template.surveys.helpers({
  surveys: function() {
    return Surveys.find();
  },

  questionDescription: function(id) {
    return Questions.findOne({_id: id}).description;
  }
});

Template.surveys.onRendered(() => {
  setTimeout(() => {
    $('.collapsible').collapsible();
  }, 100);
})
