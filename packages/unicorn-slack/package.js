Package.describe({
  name: 'unicorn:slack'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  var packages = [
    'ecmascript',
    'unicorn:headquarters',
    'unicorn:token',
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles('message.js', 'client');
  api.addFiles(['slack.js', 'message.js'], 'server');

  api.export('SlackMessage');
});
