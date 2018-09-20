
const DirectSubNodesGetter = require('../visitor/DirectSubNodesGetter');
const assert = require('assert');
var parser = require('../main');
var fs = require('fs');




describe( "# DirectSubNodeGetter Module Test", function(){

    var phpFile = fs.readFileSync( './test/php_test_case/echoVisitor.php' );
    var code = parser.parseCode(phpFile);

        it("# Return Direct Sub Node", function(){
            var visitor = new DirectSubNodesGetter();
            code.accept(visitor);
            console.log(visitor.nodes);
            assert.equal(visitor.nodes.length , 2 );
        });
    }
);




