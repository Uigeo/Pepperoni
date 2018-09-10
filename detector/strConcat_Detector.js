const Detector = require('./detector');
const _ = require('underscore');
const NodeVisitor = require('../visitor/NodeVisitor');


class StrConcat_Detector extends Detector {
    constructor() {
        super();
        this.nodeVisitor = new NodeVisitor();
    }

    detect(node){
        node.accept(nodeVisitor);
        _.filter(this.nodeVisitor.nodes, e=>{
            return (e.kind == 'bin' && e.type == '.' )|| (e.kind == 'encapsed');
        } );
         
    }
}

module.exports = StrConcat_Detector;