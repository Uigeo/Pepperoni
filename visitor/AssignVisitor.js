<<<<<<< HEAD
const NodeVisitor = require('./NodeVisitor');;
const _=require('underscore');
class AssignVisitor extends NodeVisitor {
    constructor() {
        super('assign');
=======
const NodeVisitor = require('./nodeVisitor');;
const _ = require('underscore');

class AssignVisitor extends NodeVisitor {
    constructor() {
        super();
>>>>>>> origin/master
    }

    visit(node){
      super.visit(node);
<<<<<<< HEAD
=======
      this.nodes = _.filter( this.nodes, e=>e.kind == 'assign' );
>>>>>>> origin/master
    }
}

module.exports = AssignVisitor;