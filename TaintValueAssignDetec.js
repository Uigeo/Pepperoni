const DirtyExternalValueAssignDetec=require('./DirtyExternalValueAssignDetec');

const _=require('underscore');
class TaintValueAssignDetec extends DirtyExternalValueAssignDetec {
    constructor() {
        super();
    }

    visit(node){
      super.visit(node);
      this.stms.forEach(e=>{
        this.taintcandidates.forEach(k=>{
          if(_.has(e.right,'name')&&e.right.name==k.name)
            this.taintcandidates.push(e.left);
          if(_.has(e.right.name,'name')&&e.right.name.name==k.name)
            this.taintcandidates.push(e.left);
          if(_.has(e.left,'name')&&e.loc.start.line>k.loc.start.line&&e.left.name==k.name)
            this.taintcandidates=_.without(this.taintcandidates,k);
          });
      });
    }
}

module.exports = TaintValueAssignDetec;


