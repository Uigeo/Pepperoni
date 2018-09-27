


const NodeVisitor = require('./visitor/NodeVisitor');
const CallVisitor = require('./visitor/CallVisitor');

var parser = require('./main');
var fs = require('fs');

var phpFile = fs.readFileSync( './example.php' );
var code = parser.parseCode(phpFile);

var nodeVisitor = new NodeVisitor();
var callVisitor = new CallVisitor();

code.accept(nodeVisitor);
code.accept(callVisitor);


callVisitor.nodes.forEach( e=>{console.log(e);
console.log("______________________________________");
} )