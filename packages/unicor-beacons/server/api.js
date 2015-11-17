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
  console.log('origin', params.query.origin);
  console.log('farLeft', params.query.origin);
  console.log('farRight', params.query.origin);

  res.end('Ok');
});
