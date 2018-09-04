# Sol's Issue
1. NoDefaultcaseSwitchDetec.js
2. DirtyExternalValueASsignDetec.js
    * TaintValueAssignDetec.js
    * DirtyCookieInjectionDetec.js
---------------
## NoDefaultcaseSwitchDetec.js
    function func($v){
        switch(n){
            case:
            case:
        }
    }
인 경우에, 찾아내지 못한다.
->태성이가 해결해줄 것.

## DirtyExternalValueAssignDetec.js
type 이 assign 인 node의 <code>right.what.name='_GET'||'_POST'</code> , then push into <code>this.fromexternals[] and this.taintcandidates[] </code>
## TaintValueAssignDetec.js
- [x] 새로 assign 하는 value의 오른편에 있는 값이 <code>taintcandidates[] </code> 안에 있는 값이면, 새로 assign 한 값도 <code>taintcandidates[]</code> 안에 넣어준다.

- [x] 값이 재 할당되면, taintcandidates 에서 지워야 한다.

- [ ] function taint, function reassign 구현되어야한다.
## DirtyCookieInjectionDetec.js 
- [x] setcookie(arg1,arg2) 에 taintcandidates의 원소가 들어있으면 , bugreport 를 작성한다.
- [ ] underscore.js 를 써서 코드를 줄일 수 있다.