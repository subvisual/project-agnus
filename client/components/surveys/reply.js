Template.surveysReply.helpers({
  questions: function() {
    var questions = [];

    Template.instance().questionsIds.get().forEach(function(id) {
      questions.push(Questions.findOne({_id: id}));
    });

    return questions;
  },

  surveyName: function() {
    var surveyId = Router.current().params.id;

    return Template.instance().survey.name;
  },

  scores: function() {
    return Template.instance().scores;
  }
});

Template.surveysReply.onCreated(function() {
  var surveyId = Router.current().params.id;

  this.survey = new ReactiveVar();
  this.scores = new ReactiveVar({});
  this.questionsIds = new ReactiveVar();

  this.survey.set(Surveys.findOne({_id: surveyId}));
  this.questionsIds.set(this.survey.get().questions);
});

Template.surveysReply.events({
  'click #submit': function(event, template) {
    var scores = template.scores.get();

    if (_.values(scores).length !== template.questionsIds.get().length) {
      Materialize.toast('You need to reply to all the questions before submit', 4000);
      return;
    }

    var replyedSurvey = {
      userId: Meteor.userId(),
      surveyId: template.survey.get()._id,
      scores: scores
    };

    ReplyedSurveys.insert(replyedSurvey, () => {
      Materialize.toast('Thanks for your time!', 4000);
      Router.go('home');
    });
  }
});
