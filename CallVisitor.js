
const NodeVisitor = require('./NodeVisitor');

class CallVisitor extends NodeVisitor {
    constructor() {
        super('call');
        this.stms = [];
    }

    visit(node){
      super.visit(node);
    }
}

module.exports = CallVisitor;