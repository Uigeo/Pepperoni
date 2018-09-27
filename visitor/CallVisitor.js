<<<<<<< HEAD
const NodeVisitor = require('./NodeVisitor');

class CallVisitor extends NodeVisitor {
    constructor() {
        super('call');
        this.stms = [];
=======

const NodeVisitor = require('./nodeVisitor');
const _ = require('underscore');

class CallVisitor extends NodeVisitor {
    constructor() {
        super();
>>>>>>> origin/master
    }

    visit(node){
      super.visit(node);
<<<<<<< HEAD
=======
      this.nodes = _.filter(this.nodes, e=>e.kind == 'call' );
>>>>>>> origin/master
    }
}

module.exports = CallVisitor;