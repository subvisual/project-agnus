Meteor.publish('positions', () => {
  return Positions.find();
});
