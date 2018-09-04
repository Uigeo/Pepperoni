
const GetVisitor = require('../visitor/getVisitor');

var parser = require('../main');
var fs = require('fs');

var phpFile = fs.readFileSync( './php_test_case/getVisitor.php' );
var code = parser.parseCode(phpFile);

var visitor = new GetVisitor();

code.accept(visitor);

visitor.nodes.forEach(
    (e)=>{
        console.log("______________________________________");
        console.log(e);
    }
);