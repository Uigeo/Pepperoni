

const NoDefaultSwitch = require('./noDefaultSwitch');

var parser = require('./main');
var fs = require('fs');

var phpFile = fs.readFileSync( './example.php' );
var code = parser.parseCode(phpFile);

var detector = new NoDefaultSwitch();


detector.detect(code);

console.log(detector.lines);