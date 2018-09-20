const Visitor = require('./visitor');
const _ = require('underscore');

class CallNodesGetter extends Visitor {
    constructor() {
        super();
        this.nodes = [];
    }

    visit(node){
        _.each( _.values(node), (value)=>{
            if( _.has( value, 'kind')){
                if(value.kind == 'call')this.nodes.push(value);              
            }
            if(_.keys(value).length){
                this.visit(value);
            }
        });
    }
}

module.exports = CallNodesGetter;