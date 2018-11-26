const _ = require('underscore');
const Detector = require('./detector');
const ErrorMsgOutflowFinder = require('../visitor/ErrorMsgOutflowFinder');


class ErrorMsgDetector extends Detector {
    constructor(){
        super();
    }

    detect(node){
        var finder = new ErrorMsgOutflowFinder();
        
        node.accept(finder);
        finder.execute();
        //this.path = path;
    }

    bugReport(){
        return _.map(this.visitor.nodes, (vul)=>{
            return {
                'info' : {
                    "category" : "Error Handling",
                    "name" : "Information Exposure Through an Error Message",
                    'ID' : 22,
                    'rank' : 1,
                    'CWE' : 391
                },
                'SourceLine' : {
                    "filename" : this.path,
                    "start" :  vul.loc.start,
                    "end" : vul.loc.end,
                },
                'message' : "We found that the system error message is being printed out.",
                'sugestion' : "delete or change it"
            }
        } );
    }
}

module.exports = ErrorMsgDetector;