Package.describe({
  name: 'unicorn:slack'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  var packages = [
    'unicorn:headquarters'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles(['slack.js'], 'server');
});
