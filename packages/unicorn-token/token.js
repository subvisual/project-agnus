Token = Token || {};

Token.valid = function(token) {
  return _.contains(Meteor.settings.tokens, token);
}
