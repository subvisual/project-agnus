var HQ = Npm.require('headquarters-node');

Headquarters = Headquarters || HQ(Meteor.settings.hq);

Meteor.methods({
  'hq:getUsers': function(token) {
    if (!this.userId && !Token.valid(token))
      return;

    return Headquarters.member.all();
  }
});
