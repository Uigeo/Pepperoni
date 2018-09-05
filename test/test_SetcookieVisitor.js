
const SetcookieVisitor = require('../visitor/setcookieVisitor');

var parser = require('../main');
var fs = require('fs');

var phpFile = fs.readFileSync( './php_test_case/setcookieVisitor.php' );
var code = parser.parseCode(phpFile);

var visitor = new SetcookieVisitor();

code.accept(visitor);

console.log(visitor);

visitor.nodes.forEach(
    (e)=>{
        console.log("______________________________________");
        console.log(e);
    }
);