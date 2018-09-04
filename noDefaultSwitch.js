const SwitchVisitor = require('./visitor/SwitchVisitor');
const Detector = require('./Detector');
const _ = require('underscore');

class NoDefaultSwitch extends Detector{
    constructor() {
        super();
        this.lines = [];
        this.switchVisitor = new SwitchVisitor();
    }

    detect(node){
        node.accept(this.switchVisitor);
        console.log(this.switchVisitor.nodes);
        this.lines =  _.map( _.filter(this.switchVisitor.nodes.body, (e)=> e.test == null),
         (e)=>e.loc.start);
    }
}

module.exports = NoDefaultSwitch;
