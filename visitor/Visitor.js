class Visitor {
    constructor(){
        //console.log("Visitor is Created");
    }
    visit(node){
        throw new Error('You have to implement the method doSomething!');
    }
}

module.exports = Visitor;





