const ErrorMsgDetector = require('../detector/ErrorMsgDetector');

var parser = require('../main');
var fs = require('fs');

var phpFile = fs.readFileSync( './php_test_case/tryVisitor.php' );
var code = parser.parseCode(phpFile);

var detector = new ErrorMsgDetector();

detector.detect(code);
