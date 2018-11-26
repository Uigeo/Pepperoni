const SetcookieFinder = require('../visitor/SetcookieFinder');
const Detector = require('./Detector');
const _ = require('underscore');

class SetcookieDetector extends Detector {
    constructor(){
      super();
      this.cookies;
      this.setcookieFinder;
      this.path = path;

    }

    detect(node){
        this.setcookieFinder = new SetcookieFinder();

        node.accept(this.setcookieFinder);
        
        this.setcookieFinder.execute();


    }

    //두 가지 종류의 bug가 있어서 리포트를 다르게 해주어도 될 거 같다.
    bugReport(){
        this.cookies = this.setcookieFinder.danger_cookie.concat(this.setcookieFinder.weak_cookie);
        return _.map(this.cookies, (vul)=>{
            return {
                'info' : {
                    "category" : "Inadequate Parameter",
                    "name" : "Dangerous setcookie Function",
                    'ID' : 13,
                    'rank' : 1,
                    'CWE' : 1004
                },
                'SourceLine' : {
                    "filename" : this.path,
                    "start" :  vul.loc.start,
                    "end" : vul.loc.end,
                },
                'message' : "The setcookie function's parameter was improperly entered.",
                'sugestion' : "fix it"
            }
        } );
    }

}

module.exports = SetcookieDetector;