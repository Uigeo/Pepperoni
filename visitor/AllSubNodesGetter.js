const Visitor = require('./visitor');
const _ = require('underscore');

class AllSubNodesGetter extends Visitor {
    constructor() {
        super();
        this.nodes = [];
    }

    visit(node){
        _.each( _.values(node), (value)=>{
            if( _.has( value, 'kind')){
                this.nodes.push(value);              
            }
            if(_.keys(value).length){
                this.visit(value);
            }
        });
    }
}

module.exports = AllSubNodesGetter;
