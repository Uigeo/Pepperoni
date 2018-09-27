
const VariableVisitor = require('./variableVisitor');
const _ = require('underscore');

class GetVisitor extends VariableVisitor {
    constructor() {
        super();
    }

    visit(node){
      super.visit(node);
      this.nodes =  _.filter(this.nodes, e=>e.name == '_GET' );
    }
}

module.exports = GetVisitor;