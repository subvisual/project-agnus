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
    path: '/'
  });

  this.route('questions', {
    path: '/questions'
  });

  this.route('questions.new', {
    path: '/questions/new'
  });

  this.route('questions.edit', {
    path: '/questions/:id'
  });

  this.route('questions.delete', {
    path: '/questions/delete/:id',
    action: function() {
      Meteor.call('deleteQuestion', Router.current().params.id);

      Router.go('questions')
    }
  });

  this.route('surveys', {
    path: '/surveys'
  });

  this.route('surveys.new', {
    path: '/surveys/new'
  });

  this.route('surveys.edit', {
    path: '/surveys/:id'
  });

  this.route('surveys.send', {
    path: '/surveys/send/:id'
  });

  this.route('surveys.reply', {
    path: '/surveys/reply/:id/:userEmail',
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
      Meteor.call('deleteSurvey', Router.current().params.id);

      Router.go('surveys')
    }
  });
});
