const SqlInjectionVisitor = require('../visitor/SqlInjectionVisitor');
const Detector = require('./Detector');
const _ = require('underscore');

class SqlInjection_Detector extends Detector {
    constructor(){
      super();
    }

    detect(node){
        var SqlInjectionVisitor = new SqlInjectionVisitor();

        node.accept(SqlInjectionVisitor);
        SqlInjectionVisitor.execute();
    }

}

module.exports = SqlInjection_Detector;