const Visitor = require('./visitor');
const _ = require('underscore');

class LocPrinter extends Visitor {
    constructor() {
        super();
        this.start_loc;
        this.end_loc;
    }

    visit(node){
        this.start_loc = node.loc.start.line;
        this.end_loc = node.loc.end.line;
        console.log( this.start_loc + " ~ " + this.end_loc );
    }
}

module.exports = LocPrinter;