const FormTagFinder = require('../visitor/FormTagFinder');
const InlineNodesGetter = require('../visitor/InlineNodesGetter');
const Detector = require('./Detector');
const _ = require('underscore');

class CSRFDetector extends Detector {
    constructor(){
      super();
      this.formTagFinder;
      //this.path = path;
    }

    detect(node){
        this.formTagFinder = new FormTagFinder();

        node.accept(this.formTagFinder);
        this.formTagFinder.execute();
    }

    bugReport(){
        return _.map(this.formTagFinder.bugList, (vul)=>{
            return {
                'info' : {
                    "category" : "Validate Input Data",
                    "name" : "CSRF",
                    'ID' : 9,
                    'rank' : 1,
                    'CWE' : 352
                },
                'SourceLine' : {
                    "filename" : this.path,
                    "start" :  vul.loc.start,
                    "end" : vul.loc.end,
                },
                'message' : "The method of form tag is GET.",
                'sugestion' : "Modify it to POST"
            }
        } );
    }
}

module.exports = CSRFDetector;