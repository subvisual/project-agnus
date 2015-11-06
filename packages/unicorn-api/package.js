Package.describe({
  name: 'unicorn:api',
  version: '0.0.1',
  summary: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  var packages = [
    'meteorhacks:picker',
    'unicorn:slack'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles(['api.js'], 'server');
});
