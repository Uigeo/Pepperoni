const NodeVisitor = require('./NodeVisitor');

class SwitchVisitor extends NodeVisitor {
    constructor() {
        super('switch');
        this.stms = [];
        this.switchcases=[];
    }

    visit(node){
      super.visit(node);
      this.stms.forEach(e=>{
          this.switchcases.push(e.body.children);
      });
    }
}

module.exports = SwitchVisitor;