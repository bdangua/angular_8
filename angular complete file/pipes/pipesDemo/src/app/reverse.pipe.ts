//import Pipe class
//Pipe class used to assign the name to custom 
//where "reverse" is the name of custom pipe
import { Pipe } from "@angular/core";
//use Pipe class
@Pipe({
    name:"reverse"
})
//export the class
export class reversePipe{
    transform(arg1){
        return Array.from(arg1).reverse().join("");
    }
}