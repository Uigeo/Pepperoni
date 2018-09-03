const Visitor = require('./Visitor');
const _ = require('underscore');

class NodeVisitor extends Visitor {
    constructor(kind) {
        super();
        this.kind = kind;
        this.nodes = [];
    }

    visit(node){
        if(Object.keys(node).find( (e)=> e == 'children' )){
            node.children.forEach(
                child =>{
                    if(child.kind == this.kind){
                      this.nodes.push(child);
                    }
                    if(Object.keys(child).find( (e)=> e.kind == 'body' )){
                      visit(child.body);
                    }
                    if(Object.keys(child).find( (e)=> e.kind == 'alternate' )){
                      visit(child.alternate);
                    }
                    if(Object.keys(child).find( (e)=> e.kind == 'right' )){
                        visit(child.right);
                    }
                    if(Object.keys(child).find( (e)=> e.kind == 'left' )){
                        visit(child.left);
                    }
                  }    
            ); 
          }
        else{
            if( Object.keys(node).find( (e)=> e.kind == 'body' ) ){
                visit(stm.body);
            }
            if( Object.keys(node).find( (e)=> e.kind == 'alternate' )){
                visit(stm.alternate);
            }
            if(Object.keys(child).find( (e)=> e.kind == 'right' )){
                visit(child.right);
            }
            if(Object.keys(child).find( (e)=> e.kind == 'left' )){
                visit(child.left);
            }
        }
    }
}

module.exports = NodeVisitor;
