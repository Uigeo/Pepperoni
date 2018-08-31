const Visitor = require('./Visitor');


class NodeVisitor extends Visitor {
    constructor(kind) {
        super();
        this.kind = kind;
        console.log(this.kind);
        this.stms = [];
    }

    visit(node){
        if(Object.keys(node).find( (e)=> e == 'children' )){
            node.children.forEach(
                child =>{
                    if(child.kind == this.kind){
                      this.stms.push(child);
                    }
                    if(Object.keys(child).find( (e)=> e.kind == 'body' )){
                      visit(child.body);
                    }
                    if(Object.keys(child).find( (e)=> e.kind == 'alternate' )){
                      visit(child.alternate);
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
        }
    }
}

module.exports = NodeVisitor;
