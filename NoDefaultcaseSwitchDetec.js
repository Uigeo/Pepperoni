const SwitchVisitor=require('./SwitchVisitor');
const Visitor=require('./Visitor');

class NoDefaultcaseSwtichDetec extends SwitchVisitor {
    constructor() {
        super();
        
    }
    
    visit(node){
        super.visit(node);
        var is_default=false;
        var loc=0;
        this.switchcases.forEach(e=>{
            if(e.test==null){
                is_default=true;
            }else{}
            
        });
        
        return !is_default?console.log("NO_DEFAULT_CASE IN LINE"+loc):console.log();
    }
}

module.exports = NoDefaultcaseSwtichDetec;