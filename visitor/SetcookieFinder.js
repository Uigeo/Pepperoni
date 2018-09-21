const CallNodesGetter = require('./CallNodesGetter');
const _ = require('underscore');

class SetcookieFinder extends CallNodesGetter{
    
    constructor() {
        super();
        this.danger_cookie = [];
        this.weak_cookie = [];
    }

    visit(node){
        super.visit(node);
        this.nodes = _.filter(this.nodes, e =>  _.has(e.what, 'name') && e.what.name == 'setcookie');
    }

    execute(){
        for(let i=0; i < this.nodes.length; i++){
            this.argument = this.nodes[i].arguments;
            
            this.countNumber = 0;
            this.offset = 0;

            for(let j=0; j < this.argument.length; j++){
                if(this.argument[j].kind=='number'){
                    this.countNumber ++;
                    this.offset = j;
                    if(this.argument[j].value != '1'){
                        this.weak_cookie.push(this.nodes[i]);
                    }
                }
            }

            if(this.countNumber == 0){
                this.danger_cookie.push(this.nodes[i]);
            }

            if(this.countNumber == 1 && this.argument[this.offset].value == '1'){
                this.weak_cookie.push(this.nodes[i]);
            }
        }

        
        /* TODO: make bug instance */
        console.log("Weak cookies : The parameter of setcookie function of HttpOnly is '0'");
        this.printLine(this.weak_cookie);
        console.log("Dangerous cookies : There is no parameter about HttpOnly setting");
        this.printLine(this.danger_cookie);

    }

    printLine(stms){
        stms.forEach(e=>{
          console.log(e.loc.start);
        });
    }
}

module.exports = SetcookieFinder;