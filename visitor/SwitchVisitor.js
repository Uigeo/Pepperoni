const NodeVisitor = require('./NodeVisitor');
const _=require('underscore');
class SwitchVisitor extends NodeVisitor {
    constructor() {
        super('switch');
        this.stms = [];
        this.switchcases=[];

// const NodeVisitor = require('./nodeVisitor');

// class SwitchVisitor extends NodeVisitor {
//     constructor() {
//         super();
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

// module.exports = SwitchVisitor;
//       this.nodes = _.filter(this.nodes, e=>e.kind == 'switch' );
//     }
// }

module.exports = SwitchVisitor;
