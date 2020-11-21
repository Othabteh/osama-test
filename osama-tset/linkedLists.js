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
  include(value) {
    let current = this.head;
    while (current) {
      if (current.value == value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }
  toString() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `{${current.value}}->`;
      current = current.next;
    }
    return str + 'NULL';
  }
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this.head;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    return this.head;
  }
  insertBefore(value, newVal) {
    const node = new Node(newVal);
    if (!this.head) {
      this.head = node;
      return this.head;
    }
    let current = this.head;
    while (current.value !== value) {
      current = current.next;
    }
    node.next = current;
    current = node;

    return this.head;
  }
  insertAfter(value, newVal) {
    const node = new Node(newVal);
    if (!this.head) {
      this.head = node;
      return this.head;
    }
    let current = this.head;
    while (current.value !== value) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
    return this.head;
  }
  KthFromEnd(k) {
    let count = 0;
    let current = this.head;
    while (current) {
      current = current.next;
      count++;
    }

    let index = count - k - 1;
    if (k > count || k < 0 || index < 0) {
      return 'exeption';
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
}
let ll = new LinkedList();
// ll.insert(5);
// ll.insert(4);
// ll.insert(3);
// console.log(ll.toString());
ll.append(5);
ll.append(4);
ll.append(3);
ll.append(2);
ll.append(1);
ll.append(6);
ll.append(7);
ll.append(8);
ll.append(9);

console.log(ll.KthFromEnd(2));

module.exports = LinkedList;
