const CallVisitor = require('./callVisitor');
const _ = require('underscore');

class SqlExecuteVisitor extends CallVisitor{
    constructor() {
        super();
    }

    visit(node){
        super.visit(node);
        this.nodes = _.filter(this.nodes, e=>e.what.name == 'execute');
    }
}

module.exports = SqlExecuteVisitor;

