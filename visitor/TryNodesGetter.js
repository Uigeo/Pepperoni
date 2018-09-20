const Visitor = require('./visitor');
const _ = require('underscore');

class TryNodesGetter extends Visitor {
    constructor() {
        super();
        this.nodes = [];
    }

    visit(node){
        _.each( _.values(node), (value)=>{
            if( _.has( value, 'kind')){
                if(value.kind == 'try')this.nodes.push(value);              
            }
            if(_.keys(value).length){
                this.visit(value);
            }
        });
    }
}

module.exports = TryNodesGetter;