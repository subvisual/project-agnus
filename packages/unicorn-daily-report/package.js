Package.describe({
  name: 'unicorn:daily-report',
  version: '0.0.1',
  summary: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  var packages = [
    'ecmascript',
    'meteorhacks:picker',
    'unicorn:headquarters',
    'unicorn:slack',
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'strings.js',
    'server/api.js',
    'server/methods.js'
  ], 'server');

  api.export('DailyReport');
});
