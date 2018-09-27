
const EchoVisitor = require('../visitor/echoVisitor');

var parser = require('../main');
var fs = require('fs');

var phpFile = fs.readFileSync( './test/php_test_case/echoVisitor.php' );
var code = parser.parseCode(phpFile);

var visitor = new EchoVisitor();

code.accept(visitor);

visitor.nodes.forEach(
    (e)=>{
        console.log("______________________________________");
        console.log(e);
    }
);