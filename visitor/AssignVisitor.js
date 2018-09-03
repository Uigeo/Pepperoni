const NodeVisitor = require('./NodeVisitor');;
const _=require('underscore');
class AssignVisitor extends NodeVisitor {
    constructor() {
        super('assign');
        this.fromexternals=[];
    }

    visit(node){
      super.visit(node);
      this.stms.forEach(e=>{
          if(e.right.what!=undefined)
            console.log(e.right.what.name);
      });
    }
}

module.exports = AssignVisitor;