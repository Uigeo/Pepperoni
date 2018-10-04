
var parser = require('./main');
var fs = require('fs');

var code ='';
var phpFile='';

explorer=function(filename){
    phpFile=filename;
    phpFile=fs.readFileSync('./test/php_test_case/'+phpFile+'\.php');
    code= parser.parseCode(phpFile);
    const Visitor=require('./visitor/'+filename);
    var visitor=new Visitor();
    code.accept(visitor);
    console.log(visitor);

    visitor.nodes.forEach(
        (e)=>{
            console.log("______________________________________");
            console.log(e);
        }
    );


}


module.exports='app3';