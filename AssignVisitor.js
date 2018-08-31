const NodeVisitor = require('./NodeVisitor');;

class AssignVisitor extends NodeVisitor {
    constructor() {
        super('assign');
    }

    visit(node){
      super.visit(node);
    }
}

module.exports = AssignVisitor;