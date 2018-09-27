
const NodeVisitor = require('./NodeVisitor');
const _ = require('underscore');

class EchoVisitor extends NodeVisitor {
    constructor() {
        super();
    }

    visit(node){
      super.visit(node);
      this.nodes = _.filter(this.nodes, e=>e.kind == 'echo' );
    }
}

module.exports = EchoVisitor;