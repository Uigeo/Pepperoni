
const OffsetlookupVisitor = require('./offsetlookupVisitor');
const _ = require('underscore');

class PostVisitor extends OffsetlookupVisitor {
    constructor() {
        super();
    }

    visit(node){
      super.visit(node);
      this.nodes = _.filter(this.nodes, e=>e.what.name == '_POST' );
    }
}

module.exports = PostVisitor;