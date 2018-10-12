const _ = require('underscore');
const Detector = require('./detector');
const TryNodesGetter = require('../visitor/TryNodesGetter');


class EmptyCatch_Detector extends Detector {
    constructor(){
        super();
        this.TryNodesGetter = new TryNodesGetter();
        this.emptyCatch = [];
    }

    detect(node){
        node.accept(this.TryNodesGetter);
        this.nodes = this.TryNodesGetter.nodes;

        for(let i=0; i < this.nodes.length; i++){
            this.catch = this.nodes[i].catches[0];
            //console.log(this.catch);

            if(this.catch.body.children.length == 0){
                this.emptyCatch.push(this.nodes[i]);
            }
        }
        console.log("There is empty catch statement: ");
        this.printLine(this.emptyCatch);
    }

    printLine(stms){
        stms.forEach(e=>{
          console.log(e.loc.start);
        });
    }
}
module.exports = EmptyCatch_Detector;