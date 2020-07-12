const { Queue } = require("./queue");

var queueEvaluator = new Queue();
queueEvaluator.enqueue(10)
queueEvaluator.enqueue(20)
queueEvaluator.enqueue(30)
console.log('queueEvaluator.printQueue() :>> ', queueEvaluator.printQueue());
console.log('queueEvaluator.dequeue() :>> ', queueEvaluator.dequeue());
// console.log('queueEvaluator.dequeue() :>> ', queueEvaluator.dequeue());
console.log('queueEvaluator.printQueue() :>> ', queueEvaluator.printQueue());
console.log('queueEvaluator.peek() :>> ', queueEvaluator.peek());