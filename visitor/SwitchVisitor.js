const NodeVisitor = require('./nodeVisitor');

class SwitchVisitor extends NodeVisitor {
    constructor() {
        super();
    }

    visit(node){
      super.visit(node);
      this.nodes = _.filter(this.nodes, e=>e.kind == 'switch' );
    }
}

module.exports = SwitchVisitor;