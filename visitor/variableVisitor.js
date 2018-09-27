
const NodeVisitor = require('./nodeVisitor');
const _ = require('underscore');

class VariableVisitor extends NodeVisitor {
    constructor() {
        super();
    }

    visit(node){
      super.visit(node);
      this.nodes = _.filter(this.nodes, e=>e.kind == 'variable' );
    }
}

module.exports = VariableVisitor;