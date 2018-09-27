<<<<<<< HEAD
const CallVisitor = require('./CallVisitor');
=======
const CallVisitor = require('./callVisitor');
const _ = require('underscore');
>>>>>>> origin/master

class SetcookieVisitor extends CallVisitor{
    constructor() {
        super();
<<<<<<< HEAD
        this.stm = super.stms;
=======
>>>>>>> origin/master
    }

    visit(node){
        super.visit(node);
<<<<<<< HEAD
        console.log(super.stms);
=======
        this.nodes = _.filter(this.nodes, e =>  _.has(e.what, 'name') && e.what.name == 'setcookie');
>>>>>>> origin/master
    }
}

module.exports = SetcookieVisitor;