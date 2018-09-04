const NodeVisitor = require('./NodeVisitor');;
const _=require('underscore');
class AssignVisitor extends NodeVisitor {
    constructor() {
        super('assign');
    }

    visit(node){
      super.visit(node);
    }
}

module.exports = AssignVisitor;