const AllSubNodesGetter = require('./AllSubNodesGetter');
const _ = require('underscore');

class XSSFinder extends AllSubNodesGetter {
    constructor() {
        super();
        this.taints = [];
        this.sinkpoints =[];
        this.assign_stms = [];
        this.vp = [];
    }

    visit(node){
       super.visit(node);
       this.taints = _.filter(this.nodes, (node)=>node.kind == "variable") && (node.name == '_GET' || node.name == '_POST'); 
       this.sinkpoint = _.filter(this.nodes, (node)=> node.kink == 'echo');
       this.assign_stms = _.filter(this.nodes, (node)=> node.kink == 'assign');
       this.isTaint(this.assign_stms);
       
       this.findVP(this.sinkpoints);
       console.log( this.vp);
    }

    isTaint( assign_stms){
        var push_count = 0;
        _.each( assign_stms, assign=>{
            _.each( this.taints, taint=>{
                
                    if( _.has(assign.right, 'kind') && assign.right.kind == 'variable' && assign.right.name == taint.name){
                        this.taints.push(assign.left);
                        
                        push_count++;
                    }else if( _.has(assign.right, 'kind') && assign.right.kind == 'offsetlookup' && assign.right.what.name == taint.name){
                        this.taints.push(assign.left);
                        
                        push_count++;
                    }
                }
            );
        });
        if(push_count > 0)this.isTaint(this.taints.slice(-1*push_count));
    }

    findVP(sinknodes){
        _.each(sinknodes, sink=>{
            _.each(sink.arguments, arg=>{
                _.each(this.taints, taint=>{
                    if(arg.name == taint.name) this.vp.push(sink);
                });
            });
        });
    }
}

module.exports = XSSFinder;