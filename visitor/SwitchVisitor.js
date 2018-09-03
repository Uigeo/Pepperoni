const NodeVisitor = require('./NodeVisitor');

class SwitchVisitor extends NodeVisitor {
    constructor() {
        super('switch');
    }

    visit(node){
      super.visit(node);
    }
}

module.exports = SwitchVisitor;