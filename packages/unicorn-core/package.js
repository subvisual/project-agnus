Package.describe({
  name: 'unicorn:core',
  version: '0.0.1',
  summary: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  var packages = [
    'ahref:dragula',
    'aldeed:autoform',
    'aldeed:collection2',
    'aldeed:simple-schema',
    'blaze-html-templates',
    'chart:chart',
    'ecmascript',
    'es5-shim',
    'fourseven:scss',
    'gabrielpoca:accounts-headquarters',
    'gabrielpoca:headquarters',
    'http',
    'insecure',
    'iron:router',
    'jquery',
    'matb33:collection-hooks',
    'meteor-base',
    'mobile-experience',
    'momentjs:moment',
    'mongo',
    'poetic:materialize-scss',
    'random',
    'reactive-var',
    'session',
    'standard-minifiers',
    'tracker',
    'unicorn:daily-report',
    'unicorn:headquarters',
    'unicorn:slack',
    'unicorn:token',
  ];

  api.use(packages);
  api.imply(packages);
});

Npm.depends({
  'headquarters-node': '0.2.0'
});
