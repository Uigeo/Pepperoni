const CSRFDetector = require('../detector/CSRFDetector');

var parser = require('../main');
var fs = require('fs');

var phpFile = fs.readFileSync( './php_test_case/CSRF.php' );
var node = parser.parseCode(phpFile);

var CSRF = new CSRFDetector();

CSRF.detect(node);
