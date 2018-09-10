const CallVisitor = require('./callVisitor');
const _ = require('underscore');

class SetcookieVisitor extends CallVisitor{
    constructor() {
        super();
    }

    visit(node){
        super.visit(node);
        this.nodes = _.filter(this.nodes, e =>  _.has(e.what, 'name') && e.what.name == 'setcookie');
    }
}

module.exports = SetcookieVisitor;