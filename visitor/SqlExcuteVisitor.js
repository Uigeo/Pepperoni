const CallVisitor = require('./CallVisitor');
const _ = require('underscore');

class SetcookieVisitor extends CallVisitor{
    constructor() {
        super();
    }

    visit(node){
        super.visit(node);
        this.nodes = _.filter(this.nodes, function(e){
            return e.what.name == 'excute'});
    }
}

module.exports = SetcookieVisitor;

