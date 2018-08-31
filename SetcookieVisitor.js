const CallVisitor = require('./CallVisitor');

class SetcookieVisitor extends CallVisitor{
    constructor() {
        super();
        this.stm = super.stms;
    }

    visit(node){
        super.visit(node);
        console.log(super.stms);
    }
}

module.exports = SetcookieVisitor;