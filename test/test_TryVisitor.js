const TryVisitor = require('../visitor/tryVisitor');

var parser = require('../main');
var fs = require('fs');

var phpFile = fs.readFileSync( './php_test_case/tryVisitor.php' );
var code = parser.parseCode(phpFile);

var visitor = new TryVisitor();

code.accept(visitor);

console.log(visitor);

visitor.nodes.forEach(
    (e)=>{
        console.log("______________________________________");
        console.log(e);
    }
);