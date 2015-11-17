var configs = {
  layoutTemplate: 'mainLayout'
};

var beforeHooks = {
  isLoggedIn: isLoggedIn
};

Router.configure(configs);
Router.onBeforeAction(beforeHooks.isLoggedIn, { except: ['login'] });

function isLoggedIn() {
  if (!Meteor.userId())
    this.render('login');
  else
    this.next();
}

Router.map(function setUpRoutes() {
  this.route('login', {
    path: '/login'
  });

  this.route('logout', {
    action: function() {
      Meteor.logout(function(error) {
        if (!error)
          Router.go('login');
      });
    }
  });

  this.route('home', {
    path: '/',
    subscriptions: () => {
      Meteor.subscribe('surveys');
      Meteor.subscribe('questions');
      Meteor.subscribe('replyedSurveys');
    }
  });

  this.route('questions', {
    path: '/questions',
    subscriptions: () => {
      Meteor.subscribe('questions');
    }
  });

  this.route('questions.new', {
    path: '/questions/new',
    subscriptions: () => {
      Meteor.subscribe('questions');
    }
  });

  this.route('questions.edit', {
    path: '/questions/:id',
    subscriptions: () => {
      Meteor.subscribe('question');
    }
  });

  this.route('questions.delete', {
    path: '/questions/delete/:id',
    action: () => {
      Meteor.call('deleteQuestion', this.params.id);

      Router.go('questions')
    }
  });

  this.route('surveys', {
    path: '/surveys',
    subscriptions: () => {
      Meteor.subscribe('surveys');
      Meteor.subscribe('questions');
    }
  });

  this.route('surveys.new', {
    path: '/surveys/new',
    subscriptions: () => {
      Meteor.subscribe('questions');
    }
  });

  this.route('surveys.edit', {
    path: '/surveys/:id',
    subscriptions: () => {
      Meteor.subscribe('survey', this.params.id);
    }
  });

  this.route('surveys.send', {
    path: '/surveys/send/:id'
  });

  this.route('surveys.reply', {
    path: '/surveys/reply/:id/:userEmail',
    subscriptions: () => {
      Meteor.subscribe('survey', Router.current().params.id);
    },
    onBeforeAction: function (pause) {
      if (!Meteor.user() || Meteor.user().profile.email !== this.params.userEmail)
        this.render('login');
      else
        this.next();
    }
  });

  this.route('surveys.delete', {
    path: '/surveys/delete/:id',
    action: function() {
      Meteor.call('deleteSurvey', this.params.id);

      Router.go('surveys')
    }
  });

  this.route('daily-report.reply', {
    path: '/daily-report/reply'
  })

  this.route('overview', {
    path: '/overview',
    subscriptions: () => {
      return Meteor.subscribe('replyedSurveys');
    }
  });
});
