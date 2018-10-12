const _ = require('underscore');
const Visitor = require('./visitor');
const TryNodesGetter = require('../visitor/TryNodesGetter');


class ErrorMsgOutflowFinder extends TryNodesGetter {
    constructor(){
        super();
        this.warningList = [];    
        this.dangerFuncList = ['getTraceAsString', 'getTrace'];
    }

    visit(node){
        super.visit(node);
    }

    execute(node){
        this.callNodes = [];

        //get function list in the catch block
        for(let i=0; i < this.nodes.length; i++){
            this.catch = this.nodes[i].catches[0];

            //한 개의 catch block 내에 여러 개의 함수가 있을 수 있으므로 그들을 모두 확인
            this.object = this.catch.body.children;
            this.len = this.catch.body.children.length;

            for(let j=0; j < this.len; j++){
                if(this.object[j].kind == 'call'){
                    this.callNodes.push(this.object[j]);
                }
            }
        }

        for(let i=0; i < this.callNodes.length; i++){
            console.log(this.callNodes[i].what.name);
        }
        
        this.inspect(this.callNodes);

        this.printLine(this.warningList);

        
    }

    inspect(arr){
        for(let i=0; i < arr.length; i++){
            for(let j=0; j < this.dangerFuncList.length; j++){
                if(arr[i].what.name == this.dangerFuncList[j]){
                    this.warningList.push(arr[i]);
                }
            }
        }
    }

    printLine(stms){
        stms.forEach(e=>{
          console.log(e.loc.start);
        });
    }
    
}

module.exports = ErrorMsgOutflowFinder;