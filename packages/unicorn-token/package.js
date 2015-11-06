Package.describe({
  name: 'unicorn:token',
  version: '0.0.1',
  summary: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  var packages = [
    'ecmascript',
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles('token.js', 'server');
  api.addFiles('token.js', 'client');

  api.export('Token');
});
