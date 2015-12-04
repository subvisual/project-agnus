let context = new ReactiveVar();

Template.positions.helpers({
  positions: function() {
    return Positions.find();
  }
});

Template.positions.onRendered(function() {
  context.set(document.getElementById('map').getContext('2d'));
});

Template.positions.onCreated(function() {
  this.autorun(() => {
    let ctx = context.get();
    let map = Maps.findOne();
    let positions = Positions.find().fetch();

    let circle = { x: 150, y: 150, size: 30 };

    if (map && ctx) {
      let i = 20;
      console.log(map);
      let { origin, farLeft, farRight } = map;

      origin.forEach(beacon => {
        drawBeacon(ctx, {x: 200, y: i}, beacon.rssi, beacon.minor);
        i += 20;
      });

      i = 20;

      farLeft.forEach(beacon => {
        drawBeacon(ctx, {x: 270, y: 200 + i}, beacon.rssi, beacon.minor);
        i += 20;
      });

      i = 20;

      farRight.forEach(beacon => {
        drawBeacon(ctx, {x: 30, y: 200 + i}, beacon.rssi, beacon.minor);
        i += 20;
      });
    }

    if (ctx && circle) {
      // drawLocation(circle, ctx);
    }
  });
});

function drawLocation(circle, ctx) {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.font = "12px Arial";
  ctx.fillText("Me", circle.x - circle.size / 4, circle.y + circle.size / 8);
}

function drawBeacon(ctx, position, power, minor) {
  let text = `id: ${minor}, power: ${power}`;

  ctx.font = "12px Arial";
  ctx.fillText(text, position.x, position.y);
}
