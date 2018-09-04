
const AssignVisitor = require('./visitor/AssignVisitor.js');
const CallVisitor = require('./visitor/CallVisitor');
const SetcookieVisitor = require('./visitor/SetcookieVisitor');
const SwitchVisitor=require('./visitor/SwitchVisitor');
const NoDefaultcaseSwitchDetector=require('./NoDefaultcaseSwitchDetec');
const DirtyCookieInjectionDetector=require('./DirtyCookieInjectionDetec');
const DirtyExternalValueAssignDetector=require('./DirtyExternalValueAssignDetec');
const TaintValueAssignDetector=require('./TaintValueAssignDetec');
var parser = require('./main');
var fs = require('fs');

var phpFile = fs.readFileSync( './example2.php' );
var code = parser.parseCode(phpFile);

// var taintvalueassign_detector=new TaintValueAssignDetector();
// var dirtyexternalvalueassign_detector=new DirtyExternalValueAssignDetector();
var dirtycookieinjection_detector=new DirtyCookieInjectionDetector();
//var assign_visitor = new AssignVisitor();
//var call_visitor = new CallVisitor();
//var setcookie_visitor = new SetcookieVisitor();
//  var nodefaultcaseswtich_detector=new NoDefaultcaseSwitchDetector();
// var switch_visitor=new SwitchVisitor();

// code.accept(taintvalueassign_detector);
// code.accept(dirtyexternalvalueassign_detector);
code.accept(dirtycookieinjection_detector);
//  code.accept(nodefaultcaseswtich_detector);
// code.accept(switch_visitor);
// code.accept(assign_visitor);
//code.accept(call_visitor);
//code.accept(setcookie_visitor);

//console.log(assign_visitor.stms);
console.log("----------------------------------------------------------");
//console.log(assign_visitor.stms);
console.log("----------------------------------------------------------");
//console.log(setcookie_visitor.stms);



