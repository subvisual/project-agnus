Package.describe({
  name: 'unicorn:daily-report',
  version: '0.0.1',
  summary: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  var packages = [
    'ecmascript',
    'templating',
    'meteorhacks:picker',
    'unicorn:headquarters',
    'unicorn:slack',
  ];

  api.use(packages);
  api.imply(packages);

  var serverFiles = [
    'strings.js',
    'server/api.js',
    'server/methods.js'
  ];

  var clientFiles = [
    'client/daily-report-form.html',
    'client/daily-report-form.js',
    'client/daily-report-reply.html',
    'client/daily-report-reply.js'
  ];

  api.addFiles(serverFiles, 'server');
  api.addFiles(clientFiles, 'client');

  api.export('DailyReport');
});
