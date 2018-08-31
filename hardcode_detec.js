const parser = require('./main.js');
const _ = require('../../Library/Caches/typescript/2.9/node_modules/@types/underscore');
var fs = require('fs');
//Paste PHP Code

var phpFile = fs.readFileSync( './example.php' );
var code = parser.parseCode(phpFile);

var hardcode_assign_stms = [];

var hardcode_detector = function(stm) {

    if(_.contains( _.keys(stm), 'children' )){
      _.each(stm.children, child =>{
        if(child.kind == 'assign' && (child.right.kind == 'number' || child.right.kind == 'string')){
          console.log(child);
          return child.loc.start;
        }
        if(_.contains(_.keys(child), 'body')){
          hardcode_detector(child.body);
        }
        if(_.contains(_.keys(child), 'alternate')){
          hardcode_detector(child.alternate);
        }
      })
    };
    if(_.contains(_.keys(stm), 'body')){
      hardcode_detector(stm.body);
    }
    if(_.contains(_.keys(stm), 'alternate')){
      hardcode_detector(stm.alternate);
    }
}

function subchild_detector(stm, target, condition) {
  console.log(_.chain(stm.children)
  .filter( function(n){ n.kind == target} )
  .filter( condition ));
}

function key_detector(stm, target){
  if(_.contains(_.keys(stm), target)){
    return stm;
  }
}

function treeTravel(ast, path){
  
}

key_detector(code, 'children');

subchild_detector(code, 'assign', (n)=>{ n.right.kind == 'string' || n.right.kind == 'number' });



function printLine(stms){
  stms.forEach(e=>{
    console.log(e.loc.start);
  });
}

//hardcode_detec(evalcode);
hardcode_detector(code);

console.log('---------------------------------------------------');
console.log(hardcode_assign_stms);

