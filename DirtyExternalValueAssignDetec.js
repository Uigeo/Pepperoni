const AssignVisitor=require('./visitor/AssignVisitor');

const _=require('underscore');
class DirtyExternalValueAssignDetec extends AssignVisitor {
    constructor() {
        super();
        this.fromexternals=[]; //source point
        this.taintcandidates=[];
    }

    visit(node){
      super.visit(node);
      this.stms.forEach(e=>{
        if(e.right.what!=undefined)
          if(e.right.what.name=='_POST'||e.right.what.name=='_GET'){
            this.fromexternals.push({left:e.left, right:e.right});
            this.taintcandidates.push(e.left);
          }
      });
    }
}

module.exports = DirtyExternalValueAssignDetec;


