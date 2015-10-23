Package.describe({
  name: 'unicorn:slack'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.addFiles(['slack.js'], 'server');
});
