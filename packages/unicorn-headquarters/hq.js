var HQ = Npm.require('headquarters-node');

Headquarters = Headquarters || HQ(Meteor.settings.hq);

Meteor.methods({
  getHqUsers: function(callback) {
    if (!this.userId)
      return;

    return Headquarters.member.all();
  }
});
