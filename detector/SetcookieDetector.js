const SetcookieFinder = require('../visitor/SetcookieFinder');
const Detector = require('./Detector');
const _ = require('underscore');

class SetcookieDetector extends Detector {
    constructor(){
      super();
    }

    detect(node){
        var setcookieFinder = new SetcookieFinder();

        node.accept(setcookieFinder);
        
        setcookieFinder.execute();
    }

}

module.exports = SetcookieDetector;