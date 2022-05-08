const { SingleLinkedList } = require("./singleLinkedList");
var ll = new SingleLinkedList();
console.log("---inserting------");
ll.insert(2);
ll.insert(12);
ll.insert(22);

console.log("---display------");
ll.display();

console.log("-----deleting-----");
ll.delete(12);

console.log("---dispay------");
ll.display();
