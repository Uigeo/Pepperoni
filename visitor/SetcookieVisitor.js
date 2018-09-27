class SetcookieVisitor extends CallVisitor{
    constructor() {
    }

    visit(node){
        super.visit(node);
        this.nodes = _.filter(this.nodes, e =>  _.has(e.what, 'name') && e.what.name == 'setcookie');
    }
}

module.exports = SetcookieVisitor;