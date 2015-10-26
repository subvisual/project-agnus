Template.questionsNew.helpers({
  username: function() {
    if (!Meteor.user())
      return;

    return Meteor.user().profile.name;
  }
});
