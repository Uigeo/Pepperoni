const InlineNodesGetter = require('./InlineNodesGetter');
const LocPrinter = require('./LocPrinter');
const _= require('underscore');

class FormTagFinder extends InlineNodesGetter {
    constructor() {
        super();
        this.nodes = [];
        this.bugList = [];
    }
    


    visit(node){
        super.visit(node);
    }

    execute(){
        for(let i=0; i<this.nodes.length; i++){
            var str = this.nodes[i].value;
            if(/< *(form|FORM) *(method|METHOD) *= *\"(post|POST)\"/.test(str)){
                this.bugList.push(this.nodes[i]);
            }
        }

        console.log("Form tage with \"GET\" method:");
        this.printLine(this.bugList);
    }

    printLine(stms){
        stms.forEach(e=>{
          console.log(e.loc.start);
        });
    }

}

module.exports = FormTagFinder;


