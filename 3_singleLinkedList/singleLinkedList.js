class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

var SingleLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.insert = (num) => {
    var newNode = new Node();
    if (newNode == null) {
      console.log("not enough memory");
    } else {
      newNode.data = num;
      if (this.tail != null) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
      if (this.head == null) {
        this.head = this.tail;
      }
    }
  };
  this.display = () => {
    var temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  };
  this.delete = (num) => {
    if (this.head == null) {
      console.log("list is empty..");
    }
    var temp = this.head;
    if (this.head.data == num) {
      this.head = this.head.next;
      temp = undefined;
      return;
    }
    var temp1 = this.head;
    var temp2 = null;
    while (temp1 != null) {
      if (temp1.data == num) {
        temp2.next = temp1.next;
        temp1 = undefined;
        return;
      }
      temp2 = temp1;
      temp1 = temp1.next;
    }
    console.log("not found");
  };
};

module.exports = { SingleLinkedList };
