//import Calculator class
import Calculator from "./calc";
//describe() is the predefined function in karma with jasmine
//execution starts with describe()
describe("calculator testing",()=>{
    //to write unit test cases we will use describe()
    describe("add function testing",()=>{
        //it() is the predefined function it holds the testing code
        it("10+10 should be equal to 20",()=>{
            //call the add function
            let obj:Calculator = new Calculator();
            const result = obj.add(10,10);
            //assertion
            expect(result).toBe(20);
        });
    });
    describe("sub function testing",()=>{
        it("10-10 should be 0",()=>{
            let obj:Calculator = new Calculator();
            const result = obj.sub(10,10);
            expect(result).toBe(0);
        });
    });
    describe("check element existence",()=>{
        it("check 30 in nums",()=>{
            let obj:Calculator = new Calculator();
            let arr = obj.nums;
            expect(arr).toContain(30);
        });
    });
});