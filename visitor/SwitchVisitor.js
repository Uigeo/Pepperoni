const NodeVisitor = require('./NodeVisitor');
const _=require('underscore');
class SwitchVisitor extends NodeVisitor {
    constructor() {
        super('switch');
        this.stms = [];
        this.switchcases=[];
    }

    visit(node){
      super.visit(node);
      this.stms.forEach(e=>{
          e.body.children.forEach(k=>{
             this.switchcases.push(k);  //each case: condition
          });
    });
    }
}

module.exports = SwitchVisitor;
