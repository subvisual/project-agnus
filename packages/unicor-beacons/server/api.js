var bodyParser = Npm.require( 'body-parser' );

Picker.middleware( bodyParser.json() );
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );

Picker.route('/API/beacons/position', function(params, req, res, next) {
  if (!req.body.position)
    return res.end('No position details');

  req.body.position.forEach(beacon => {
    Positions.insert(beacon);
  });

  return res.end('Ok');
});

Picker.route('/API/beacons/config', function(params, req, res, next) {
  console.log('config hit:')
  if (!req.body.origin.length || !req.body.farLeft.length || !req.body.farRight.length) {
    console.log('invalid', req.body.origin.length, req.body.farLeft.length, req.body.farRight.length)
    return res.end('Invalid data');
  }

  console.log('origin', req.body.origin);
  console.log('farLeft', req.body.farLeft);
  console.log('farRight', req.body.farRight);

  Maps.insert(req.body);

  res.end('Ok');
});
