const FormTagFinder = require('../visitor/FormTagFinder');
const InlineNodesGetter = require('../visitor/InlineNodesGetter');
const Detector = require('./Detector');
const _ = require('underscore');

class CSRFDetector extends Detector {
    constructor(){
      super();
    }

    detect(node){
        var formTagFinder = new FormTagFinder();

        node.accept(formTagFinder);

        //console.log(inlineNodesGetter.nodes);

        formTagFinder.execute();

    


        //TODO generate bug instance
        //generateBug();
    }
}

module.exports = CSRFDetector;