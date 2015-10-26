Headquarters = Npm.require('headquarters-node');

Meteor.methods({
  getHqUsers: function(callback) {
    if (!this.userId)
      return;

    var headquarters = Headquarters(Meteor.settings.hq);

    return headquarters.member.all();
  }
});
