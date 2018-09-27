
const XSS_Detector = require('../detector/XSS_Detector');

var parser = require('../main');
var fs = require('fs');

var phpFile = fs.readFileSync( './php_test_case/XSS.php' );
var code = parser.parseCode(phpFile);

var detector = new XSS_Detector();

detector.detect(code);
