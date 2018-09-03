
const NodeVisitor = require('./NodeVisitor');

class CallVisitor extends NodeVisitor {
    constructor() {
        super('call');
    }

    visit(node){
      super.visit(node);
    }
}

module.exports = CallVisitor;