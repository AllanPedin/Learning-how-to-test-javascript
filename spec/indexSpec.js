const utils = require("../src/index.js");
describe("index.js",()=>{
    it("should be able to lower case a string",()=>{
        expect(utils.toLowerCase).toBeDefined();
        console.log("this test ran")
        expect(utils.toLowerCase("HELLO WORLD")).toEqual("hello world");
    });
    it("should know the fibonacci numbers",()=>{
        expect(utils.fibonacci).toBeDefined();

        expect(utils.fibonacci(1)).toEqual([0,1])
        expect(utils.fibonacci(2)).toEqual([0,1,1])
        expect(utils.fibonacci(3)).toEqual([0,1,1,2])
    });
});