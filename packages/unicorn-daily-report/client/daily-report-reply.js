Template.dailyReportReply.helpers({
  username: function() {
    if (!Meteor.user())
      return;
    return Meteor.user().profile.name;
  },

  forms: function() {
    return Template.instance().forms;
  },
});

Template.dailyReportReply.onCreated(function() {
  this.forms = new ReactiveVar([{ userId: Meteor.userId }]);
});

Template.dailyReportReply.events({
  'click #addForm': function(event, template) {
    var forms = template.forms.get();
    forms.push({ userId: Meteor.userId() });
    template.forms.set(forms);
  },

  'click #submit': function(event, template) {
    template.forms.get().forEach(function(form) {
      if (!validForm(form))
        return;

      Meteor.call('dailyReport:submit', form);
    });
  }
});

function validForm(form) {
  return form.hours && form.project;
}
