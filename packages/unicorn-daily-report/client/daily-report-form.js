Template.dailyReportForm.helpers({
  projects: function() {
    return Projects;
  }
})

Template.dailyReportForm.onRendered(function() {
  this.$('select').material_select();
});

Template.dailyReportForm.events({
  'click #delete': function(event, template) {
    if (template.data.index === 0)
      return;

    var forms = template.data.forms.get();

    forms.splice(template.data.index, 1);

    template.data.forms.set(forms);
  },

  'keyup #hours': function(event, template) {
    var forms = template.data.forms.get();

    forms[template.data.index].hours = $('#hours').val();

    template.data.forms.set(forms);
  },

  'keyup #description': function(event, template) {
    var forms = template.data.forms.get();

    forms[template.data.index].description = $('#description').val();

    template.data.forms.set(forms);
  },

  'change #project': function(event, template) {
    var forms = template.data.forms.get();

    $('#project option:selected').each(function() {
      forms[template.data.index].project = $(this).text();
    });

    template.data.forms.set(forms);
  }
});
