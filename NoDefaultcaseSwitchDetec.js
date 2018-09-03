const SwitchVisitor=require('./visitor/SwitchVisitor');
const Visitor=require('./visitor/Visitor');
const _=require('underscore');
class NoDefaultcaseSwtichDetec extends SwitchVisitor {
    constructor() {
        super();
        this.default_offsets=[];
    }
    
    visit(node){
        super.visit(node);
        this.switchcases.forEach(e=>{
            if(e.test==null){
                this.default_offsets.push({"start":e.loc.start.offset,"end":e.loc.end.offset});
            }
        });
        this.stms.forEach(e=>{
            this.default_offsets.forEach(k=>{
                if(e.loc.start.offset<k.start&&e.loc.end.offset>k.end)  //eliminates having default switchcases from stms. then, nodefault switchcases are left in stms which are NONSECURE.
                    this.stms=_.without(this.stms,e);
            });
        });
        this.stms.forEach(e=>console.log(" Missing Default Case in Switch Statement in line "+e.loc.start.line));
    }
}

module.exports = NoDefaultcaseSwtichDetec;