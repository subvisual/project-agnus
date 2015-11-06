Package.describe({
  name: 'unicorn:headquarters'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  var packages = [
    'ecmascript'
  ]

  api.use(packages);
  api.imply(packages);

  api.addFiles(['hq.js'], 'server');
  api.export('Headquarters');
});

Npm.depends({
  'headquarters-node': '0.2.0'
});
