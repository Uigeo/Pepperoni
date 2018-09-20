const Visitor = require('./visitor');
const _ = require('underscore');

class DirectSubNodesGetter extends Visitor {
    constructor() {
        super();
        this.nodes = [];
    }

    visit(node){
        if(_.has( node, 'children')){
            _.each( _.values(node.children), (value)=>{
                if( _.has( value, 'kind')){
                    this.nodes.push(value);              
                }
            });
        }else if(_.has( node, 'body')){
            _.each( _.values(node.body.children), (value)=>{
                if( _.has( value, 'kind')){
                    this.nodes.push(value);              
                }
            });
        }
    }
}

module.exports = DirectSubNodesGetter;
