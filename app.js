
const AssignVisitor = require('./visitor/AssignVisitor');
const CallVisitor = require('./visitor/CallVisitor');
const SetcookieVisitor = require('./visitor/SetcookieVisitor');
const SqlInjectionVisitor = require('./visitor/SqlInjectionVisitor');

var parser = require('./main');
var fs = require('fs');

var phpFile = fs.readFileSync( './test/php_test_case/SqlInjectionVisitor.php' );
var code = parser.parseCode(phpFile);


//var assign_visitor = new AssignVisitor();
var call_visitor = new CallVisitor();
var sqlinjection_visitor = new SqlInjectionVisitor();

//code.accept(assign_visitor);
code.accept(call_visitor);
code.accept(sqlinjection_visitor);

//console.log(assign_visitor.stms);
console.log("—————————————————————————————");
console.log(call_visitor.nodes);
console.log("—————————————————————————————");
console.log(sqlinjection_visitor.nodes);




///

// const AssignVisitor = require('./visitor/AssignVisitor');
// const CallVisitor = require('./visitor/CallVisitor');
// const SetcookieVisitor = require('./visitor/SetcookieVisitor');

// var parser = require('./main');
// var fs = require('fs');

// var phpFile = fs.readFileSync( './example.php' );
// var code = parser.parseCode(phpFile);


// //var assign_visitor = new AssignVisitor();
// var call_visitor = new CallVisitor();
// var setcookie_visitor = new SetcookieVisitor();

// //code.accept(assign_visitor);
// code.accept(call_visitor);
// code.accept(setcookie_visitor);

// //console.log(assign_visitor.stms);
// console.log("----------------------------------------------------------");
// console.log(call_visitor.nodes);
// console.log("—————————————————————————————");
// console.log(setcookie_visitor.nodes);




