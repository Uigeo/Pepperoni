const EmptyCatch_Detector = require('../detector/emptyCatch_Detector');

var parser = require('../main');
var fs = require('fs');

var phpFile = fs.readFileSync( './php_test_case/tryVisitor.php' );
var code = parser.parseCode(phpFile);

var detector = new EmptyCatch_Detector();

detector.detect(code);
