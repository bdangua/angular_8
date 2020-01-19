import { Pipe } from "@angular/core";
@Pipe({
    name:"customMessage"
})
export class customPipe{
    transform(arg1:string,arg2:string,arg3:string){
        return arg3+" "+arg2+" "+arg1;
    }
};