Meteor.publish('positions', () => {
  return Positions.find();
});

Meteor.publish('maps', () => {
  return Maps.find();
});
