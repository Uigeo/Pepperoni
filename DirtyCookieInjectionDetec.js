var fs=require('fs');
var path=require('path');
var phpFile=fs.readFileSync('./findBadCookieInjectionSource.php');

var engine=require('php-parser');
var parser=new engine({
    parser: {
        extractDoc: true,
        php7: true,
        locatons : true,
      },
      ast: {
        withPositions: true,
        withSource: true,
      }

});

var injectionCode=parser.parseCode(phpFile); //as AST

badassign=[];
badcookies=[];
badCookieInjection_detect(injectionCode);
console.log(badassign);
console.log("BadCookieInjection");
console.log("in Line number "+ badcookies);

function badCookieInjection_detect(program){
    if(program.kind="program")
        findBadAssign(program.children);
        findBadCookieInjection(program.children);
}

function findBadAssign(children){
    children.forEach(child=>{
        if(child.kind="assign"){
            if(isRefRemote(child))
                badassign.push(child.left.name);
            if(isTaint(child))
                badassign.push(child.left.name);
        }
        else if(hasBody(child))
            findBadAssign(child);
    })
}

function isRefRemote(child){
    if(child.right != undefined)
        if(child.right.what!= undefined)
            if(child.right.what.name=="_GET" || child.right.what.name=="_POST")
                return true;
    
     else return false;
}
function isTaint(child){
    taintvalue=false;
    if(child.right!=undefined)
        if(child.right.kind=="constref")
            badassign.forEach(value=>{
                if(child.right.name.name==value){}
                    taintvalue=true;
                })
   return taintvalue;
}
function hasBody(child){
    if(child.body != undefined){ 
      return true;  
    }
      return false;     
}

function findBadCookieInjection(children){
    children.forEach(child=>{
        if(child.kind="call")
            if(isSetCookie(child))
                if(isBadValueAssigned(child))
                    badcookies.push(child.loc.start.line);
        else if(hasBody(child))
            findBadCookieInjection(child);
    })
}

function isSetCookie(child){
    if(child.what!=undefined)
        if(child.what.name=="setcookie")
        return true;
    return false;
}

function isBadValueAssigned(child){
    badvalue=false;
    child.arguments.forEach(argu=>{
        badassign.forEach(value=>{
            if(argu.name==value) badvalue=true;
            })
        })
    return badvalue;
}
