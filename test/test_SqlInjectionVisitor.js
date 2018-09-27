const CallVisitor = require('../visitor/CallVisitor');
const SqlInjectionVisitor = require('../visitor/SqlInjectionVisitor');

var parser = require('../main');
var fs = require('fs');

var phpFile = fs.readFileSync( './test/php_test_case/SqlInjectionVisitor.php');
var code = parser.parseCode(phpFile);


var visitor = new SqlInjectionVisitor();


code.accept(visitor);

// console.log(visitor);

visitor.nodes.forEach(
    (e)=>{
        
        console.log(e.loc.start);
        console.log("______________________________________");
    }
);


// console.log("—————————————————————————————");
// console.log(call_visitor.nodes);
// console.log("—————————————————————————————");
// console.log(sqlinjection_visitor.nodes);
