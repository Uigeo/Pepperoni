const LocPrintVisitor = require('../visitor/LocPrintVisitor.js');

var parser = require('../main');
var fs = require('fs');

var phpFile = fs.readFileSync( './php_test_case/echoVisitor.php' );
var code = parser.parseCode(phpFile);

var visitor = new LocPrintVisitor();

code.accept(visitor);
