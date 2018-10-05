const Visitor = require('./visitor');
const _= require('underscore');

class FormTagFinder extends Visitor {
    constructor() {
        super();
        this.nodes = [];
        
    }
    


    visit(node){
        _.each( _.values(node), (value)=>{
            if( _.has( value, 'value')){
                if(value.kind == 'inline')this.nodes.push(value);              
            }
            if(_.keys(value).length){
                this.visit(value);
            }
        });
    }
    //TODO: implement execute method.
    /*
    var url = 'https://taegon.kim/aboutme';
    var protocol = ( /^https?(?=:\/\/)/.exec( url ) || [''] )[0];
    console.log( protocol ); // 'https'
    */
    execute(){

    }

}

module.exports = FormTagFinder;


