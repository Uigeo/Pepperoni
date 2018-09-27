class Visitor {
<<<<<<< HEAD

    constructor(){
        console.log("Visitor is Created");
    }

=======
    constructor(){
        //console.log("Visitor is Created");
    }
>>>>>>> origin/master
    visit(node){
        throw new Error('You have to implement the method doSomething!');
    }
}

module.exports = Visitor;





