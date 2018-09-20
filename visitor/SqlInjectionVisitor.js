const CallVisitor = require('./callVisitor');
const _ = require('underscore');

class SqlInjectionVisitor extends CallVisitor{
    constructor() {
        super();
        this.sqlinjection= [];
        
    }

    visit(node){
        super.visit(node);
        // console.log(node);
        // this.nodes = _.filter(this.nodes, e=>e.what.name == 'execute');
        
        //1//query찾기
        // this.nodes = _.filter(this.nodes, e => {
        //   if(_.has(e.what.offset,'name')) {
        //     console.log(e.what.offset.name);
        //     return e.what.offset.name =='query';   
        //   }   
        // });
        
      // 2//query 안에서 varible들어오는 것
        this.nodes = _.filter(this.nodes, e=> {

          //$result = mysql_query('-----');
          if(_.has(e.what, "name")){
            if(e.what.name=="mysql_query"){
              if(_.keys(e.arguments)){ // argu에 variable이 들어가면 sql인젝션이 일어날 수도 있다.
                let variableFlag = 0;
                for(let i=0; i<_.values(e.arguments[0].value).length ; i++){
                  if(_.values(e.arguments[0].value)[i].kind =='variable'){
                    variableFlag = 1;
                  }
                }
                if(variableFlag == 1){
                  return e.what.name =='mysql_query';
                } 
              }        
            }
          }

          //$mysqli->query("-----");
          if(_.has(e.what.offset,'name')){
            if(e.what.offset.name =='query'){ //query라는 함수를 사용한다면
              if(_.keys(e.arguments)){ // argu에 variable이 들어가면 sql인젝션이 일어날 수도 있다.
                let variableFlag = 0;
                for(let i=0; i<_.values(e.arguments[0].value).length ; i++){
                  if(_.values(e.arguments[0].value)[i].kind =='variable'){
                    variableFlag = 1;
                  }
                }
                if(variableFlag == 1){
                  return e.what.offset.name =='query';
                }
              }
            }
          }
        })


    }


}

module.exports = SqlInjectionVisitor;

