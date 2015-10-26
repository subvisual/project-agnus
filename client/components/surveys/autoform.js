AutoForm.hooks({
  updateSurveyForm: {
    onSuccess: function(operation, result, template) {
      Materialize.toast(operation + ' success!', 4000);
      Router.go("surveys");
    },
    onError: function(operation, error, template) {
      Materialize.toast(operation + ' fail!', 4000);
    }
  },

  newSurveyForm: {
    onSuccess: function(operation, result, template) {
      Materialize.toast(operation + ' success!', 4000);
      Router.go("surveys");
    }
  }
});
