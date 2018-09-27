
const VariableVisitor = require('./variableVisitor');
const _ = require('underscore');

class PostVisitor extends VariableVisitor {
    constructor() {
        super();
    }

    visit(node){
      super.visit(node);
      this.nodes = _.filter(this.nodes, variable=>variable.name == '_POST' );
    }
}

module.exports = PostVisitor;