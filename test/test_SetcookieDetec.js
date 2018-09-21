const SetcookieDetector = require('../detector/SetcookieDetector');

var parser = require('../main');
var fs = require('fs');

var phpFile = fs.readFileSync( './php_test_case/setcookieVisitor.php' );
var node = parser.parseCode(phpFile);

var setcookieDetector = new SetcookieDetector();

setcookieDetector.detect(node);