const NodeVisitor = require('./nodeVisitor');;

class AssignVisitor extends NodeVisitor {
    constructor() {
        super();
    }

    visit(node){
      super.visit(node);
      this.nodes = _.filter( this.nodes, e=>e.kind == 'assign' );
    }
}

module.exports = AssignVisitor;