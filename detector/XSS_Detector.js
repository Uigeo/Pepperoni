const _ = require('underscore');
const Detector = require('./detector');
const AssignVisitor = require('../visitor/assignVisitor');
const PostVisitor = require('../visitor/postVisitor');
const GetVisitor = require('../visitor/getVisitor');
const EchoVisitor = require('../visitor/echoVisitor');

class XSS_Detector extends Detector {
    constructor() {
        super();
        this.assignVisitor = new AssignVisitor();
        this.postVisitor = new PostVisitor();
        this.getVisitor = new GetVisitor();
        this.echoVisitor = new EchoVisitor();
        this.taints = [];
        this.sinkpoint =[];
        this.v = [];
    }

    detect(node){
        node.accept(this.assignVisitor);
        node.accept(this.postVisitor);
        node.accept(this.getVisitor);
        node.accept(this.echoVisitor);
        this.taints = _.union( this.getVisitor.nodes , this.postVisitor.nodes);
        this.sinkpoint = this.echoVisitor.nodes;
        this.isTaint(this.assignVisitor.nodes);
        this.findTaintsink(this.sinkpoint);
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

    findTaintsink(sinknodes){
        _.each(sinknodes, sink=>{
            _.each(sink.arguments, arg=>{
                console.log("*t*" + arg.name);
                _.each(this.taints, taint=>{
                    
                    if(arg.name == taint.name) this.v.push(sink.loc);
                });
            } );
        });
    }

}

module.exports = XSS_Detector;