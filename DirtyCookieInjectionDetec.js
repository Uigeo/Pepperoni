const TaintValueAssignDetec=require('./TaintValueAssignDetec');
const CallVisitor=require('./visitor/CallVisitor');
const _=require('underscore');
class DirtyCookieInjectionDetec extends TaintValueAssignDetec {
    constructor() {
        super();
    }

    visit(node){
      super.visit(node);
      var call_visitor=new CallVisitor();
      node.accept(call_visitor);
      call_visitor.stms.forEach(e=>{
        if(_.has(e,'arguments')){
            e.arguments.forEach(k=>{
                this.taintcandidates.forEach(m=>{
                    if(m.name==k.name)
                        console.log("Taint Value ["+k.name+"] assignment on SetCookie Function in Line "+e.loc.start.line);

                });
            });
        }
      });  
    }
}

module.exports = DirtyCookieInjectionDetec;