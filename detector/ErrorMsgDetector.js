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
    }
}

module.exports = ErrorMsgDetector;