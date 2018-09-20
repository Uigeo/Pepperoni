
const XSSFinder = require('../visitor/XSSFinder');
const assert = require('assert');
var parser = require('../main');
var fs = require('fs');




describe( "# XSSFinder Module Test", function(){

    var phpFile = fs.readFileSync( './test/php_test_case/XSS.php' );
    var code = parser.parseCode(phpFile);

        it("# Vulnarability Point", function(){
            var visitor = new XSSFinder();
            code.accept(visitor);
            assert.equal(visitor.vp.length , 2 );
        });
    }
);