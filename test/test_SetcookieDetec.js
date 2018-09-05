const Setcookie_Detector = require('../detector/setcookie_Detector');

var parser = require('../main');
var fs = require('fs');

var phpFile = fs.readFileSync( './php_test_case/setcookieVisitor.php' );
var code = parser.parseCode(phpFile);

var detector = new Setcookie_Detector();

detector.detect(code);
