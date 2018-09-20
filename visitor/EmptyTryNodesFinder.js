const TryNodesGetter = require('./TryNodesGetter');
const _ = require('underscore');

class EmptyTryNodesGetter extends TryNodesGetter {
    constructor() {
        super();
    }

    visit(node){
        super(node);

        // Find no Catch
        this.nodes = _.filter(this.nodes, (node)=>{ 
            return node.catches.length ==0 ;
        } );

        // Find empty Catch
        this.nodes = _.filter(this.nodes, (node)=>{
            _.some(node.catches, (ct)=>{
                return ct.body.children.length == 0;
            })
        })
    }
}

module.exports = EmptyTryNodesGetter;