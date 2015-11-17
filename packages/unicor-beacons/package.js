Package.describe({
  name: 'unicorn:beacons',
  version: '0.0.1',
  summary: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  var packages = [
    'ecmascript',
    'meteorhacks:picker'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'server/api.js'
  ], 'server');
});
