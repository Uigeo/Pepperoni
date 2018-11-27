const _ = require('underscore');
const Detector = require('./detector');
const TryNodesGetter = require('../visitor/TryNodesGetter');


class EmptyCatch_Detector extends Detector {
    constructor(src, path){
        super();
        this.TryNodesGetter = new TryNodesGetter();
        this.emptyCatch = [];
        this.path = path;
    }

    detect(node){
        node.accept(this.TryNodesGetter);
        this.nodes = this.TryNodesGetter.nodes;

        for(let i=0; i < this.nodes.length; i++){
            this.catch = this.nodes[i].catches[0];

            if(this.catch.body.children.length == 0){
                this.emptyCatch.push(this.nodes[i]);
            }
        }
        // console.log("There is empty catch statement: ");
        // this.printLine(this.emptyCatch);
    }

    // printLine(stms){
    //     stms.forEach(e=>{
    //       console.log(e.loc.start);
    //     });
    // }

    bugReport(){
        return _.map(this.emptyCatch, (vul)=>{
            return {
                'info' : {
                    "category" : "Error Handling",
                    "name" : "Empty Catch Block",
                    'ID' : 26,
                    'rank' : 1,
                    'CWE' : 390
                },
                'SourceLine' : {
                    "filename" : this.path,
                    "start" :  vul.loc.start,
                    "end" : vul.loc.end,
                },
                'message' : "There is empty catch block",
                'sugestion' : "Print out the appropriate error message."
            }
        } );
    }
}
module.exports = EmptyCatch_Detector;