class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this.head;
  }
}
let ll = new LinkedList();
console.log(ll.insert(5));

module.exports = LinkedList;
