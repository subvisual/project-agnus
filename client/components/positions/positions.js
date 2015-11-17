Template.positions.helpers({
  positions: function() {
    console.log(Positions.find().fetch());
    return Positions.find();
  }
})
