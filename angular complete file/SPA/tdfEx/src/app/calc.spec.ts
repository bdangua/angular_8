import { Calculator } from "./calc";
describe("calculator testing",()=>{
    describe("add function testing",()=>{
        it("10+10 should be equal to 20",()=>{
                const result = new Calculator().add(10,10);
                expect(result).toBe(20);
        });
    });

    describe("sub function testing",()=>{
        it("10-10 should be equal to 0",()=>{
                const result = new Calculator().sub(10,10);
                expect(result).toBe(-1)
        });
    });


    describe("check element existence",()=>{
        it("check 30 in arr",()=>{
            const res = new Calculator().arr;
            expect(res).toContain(30);
        });
    });



});