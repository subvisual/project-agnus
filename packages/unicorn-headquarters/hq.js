Headquarters = Npm.require('headquarters-node');

Meteor.methods({
  getHqUsers: function(callback) {
    var headquarters = Headquarters(Meteor.settings.hq);

    return headquarters.member.all();
  }
});
