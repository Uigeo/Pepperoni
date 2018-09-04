
const PostVisitor = require('../visitor/postVisitor');

var parser = require('../main');
var fs = require('fs');

var phpFile = fs.readFileSync( './php_test_case/postVisitor.php' );
var code = parser.parseCode(phpFile);

var visitor = new PostVisitor();

code.accept(visitor);

console.log(visitor);

// visitor.nodes.forEach(
//     (e)=>{
//         console.log("______________________________________");
//         console.log(e);
//     }
// );