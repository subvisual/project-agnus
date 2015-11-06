Package.describe({
  name: 'unicorn:headquarters'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.addFiles(['hq.js'], 'server');
  api.export('Headquarters');
});

Npm.depends({
  'headquarters-node': '0.2.0'
});
