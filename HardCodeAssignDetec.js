import "AssignVisitor";
import { Visitor } from "./Visitor";

export class HardCodeAssignDetec extends AssignVisitor {
    constructor() { 
    }

    hardCodeStms(node){
        super.assignVisit(node);
        return assignStms.filter( stm => stm.right == 'number' || stm.left == 'string' );
    }
}