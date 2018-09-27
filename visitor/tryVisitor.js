const NodeVisitor = require('./nodeVisitor');
const _ = require('underscore');

class TryVisitor extends NodeVisitor {
    constructor() {
        super();
    }

    visit(node){
      super.visit(node);
      this.nodes = _.filter(this.nodes, e=>e.kind == 'try');
    }
}

module.exports = TryVisitor;