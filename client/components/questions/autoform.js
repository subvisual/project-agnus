AutoForm.hooks({
  updateQuestionForm: {
    onSuccess: function(operation, result, template) {
      Materialize.toast(operation + ' success!', 4000);
      Router.go("questions");
    },
    onError: function(operation, error, template) {
      Materialize.toast(operation + ' fail!', 4000);
    }
  },

  newQuestionForm: {
    onSuccess: function(operation, result, template) {
      Materialize.toast(operation + ' success!', 4000);
      Router.go("questions");
    }
  }
});
