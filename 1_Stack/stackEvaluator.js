const { Stack } = require("./stack");

var stackEvaluator = new Stack();
stackEvaluator.push(2);
stackEvaluator.push(3);
stackEvaluator.push(4);
console.log('stackEvaluator.printStack() :>> ', stackEvaluator.printStack());
console.log('stackEvaluator.peek() :>> ', stackEvaluator.peek());
console.log('stackEvaluator.isEmpty() :>> ', stackEvaluator.isEmpty());
console.log('stackEvaluator.pop() :>> ', stackEvaluator.pop());
console.log('stackEvaluator.pop() :>> ', stackEvaluator.pop());
console.log('stackEvaluator.clear() :>> ', stackEvaluator.clear());
console.log('stackEvaluator.pop() :>> ', stackEvaluator.pop());
console.log('stackEvaluator.peek() :>> ', stackEvaluator.peek());
console.log('stackEvaluator.isEmpty() :>> ', stackEvaluator.isEmpty());
console.log('stackEvaluator.printStack() :>> ', stackEvaluator.printStack());