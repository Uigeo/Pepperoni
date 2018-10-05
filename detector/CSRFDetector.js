//const FormTagGetter = require('../visitor/FormTagGetter');
const InlineNodesGetter = require('../visitor/InlineNodesGetter');
const Detector = require('./Detector');
const _ = require('underscore');

class CSRFDetector extends Detector {
    constructor(){
      super();
    }

    detect(node){
        var inlineNodesGetter = new InlineNodesGetter();

        node.accept(inlineNodesGetter);

        console.log(inlineNodesGetter.nodes);

    


        //TODO generate bug instance
        //generateBug();
    }
}

module.exports = CSRFDetector;