
const AllSubNodesGetter = require('../visitor/AllSubNodesGetter');
const assert = require('assert');
var parser = require('../main');
var fs = require('fs');




describe( "# AllSubNodeGetter Module Test", function(){

    var phpFile = fs.readFileSync( './test/php_test_case/echoVisitor.php' );
    var code = parser.parseCode(phpFile);
    var visitor = new AllSubNodesGetter();
        it("# Return All Sub Node", function(){ 
            code.accept(visitor);
            assert.equal(visitor.nodes.length , 24 );
        });
    }
);




