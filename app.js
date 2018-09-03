
const AssignVisitor = require('./AssignVisitor.js');
const CallVisitor = require('./CallVisitor');
const SetcookieVisitor = require('./SetcookieVisitor');
const SwitchVisitor=require('./SwitchVisitor');
const NoDefaultcaseSwitchDetector=require('./NoDefaultcaseSwitchDetec');
var parser = require('./main');
var fs = require('fs');

var phpFile = fs.readFileSync( './example.php' );
var code = parser.parseCode(phpFile);


//var assign_visitor = new AssignVisitor();
//var call_visitor = new CallVisitor();
//var setcookie_visitor = new SetcookieVisitor();
 var nodefaultcaseswtich_detector=new NoDefaultcaseSwitchDetector();
// var switch_visitor=new SwitchVisitor();


 code.accept(nodefaultcaseswtich_detector);
// code.accept(switch_visitor);
//code.accept(assign_visitor);
//code.accept(call_visitor);
//code.accept(setcookie_visitor);

//console.log(assign_visitor.stms);
console.log("----------------------------------------------------------");
//console.log(assign_visitor.stms);
console.log("----------------------------------------------------------");
//console.log(setcookie_visitor.stms);



