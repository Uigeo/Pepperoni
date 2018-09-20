

const Visitor = require('./Visitor');;
const _ = require('underscore');

class XVisitor extends Visitor {
    constructor() {
        super();
    }

    visit(node){
     
        if(node.kind == 'while'){

        }
        else if(node.kind == 'for'){

        }
        else if(node.kind == 'assign'){
            
        }
        else if(node.kind == 'variable'){
            
        }
        else if(node.kind == 'while'){
            
        }
        else if(node.kind == 'echo'){
            
        }
        else if(node.kind == 'try'){
            
        }
        else if(node.kind == 'switch'){
            
        }
        else{

        }

    }
}

module.exports = XVisitor;