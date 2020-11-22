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
    console.log(current);

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
  removeAt(k) {
    let length = 0;
    let current = this.head;
    while (current) {
      current = current.next;
      length++;
    }

    let index = length - k - 1;
    if (k < 0 || k > length) {
      return;
    }

    let currentNode = this.head;
    let previous;
    // let count = 0;

    // Remove first
    if (k === length - 1) {
      this.head = currentNode.next;
    }
    for (let i = 0; i < index; i++) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    // else {
    //   while (count < k) {
    //     count++;
    //     previous = current;
    //     current = current.next;
    //   }

    previous.next = currentNode.next;
    return this.head;
  }
  middle(value) {
    const node = new Node(value);
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    let mid = Math.floor(count / 2);
    console.log(mid);
    let currentNode = this.head;
    for (let i = 0; i < mid; i++) {
      currentNode = currentNode.next;
    }
    node.next = currentNode.next;
    currentNode.next = node;
    return this.head;
  }
}

function zipLists(LL1, LL2) {
  let zipped = new LinkedList();
  let current1 = LL1.head;
  let current2 = LL2.head;
  while (current1 || current2) {
    if (current1) {
      zipped.append(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      zipped.append(current2.value);
      current2 = current2.next;
    }
  }
  return zipped;
}

function palindrome(LL) {
  let arr = [];
  let reversedArr = [];
  let current = LL.head;
  while (current) {
    arr[arr.length] = current.value;
    current = current.next;
  }
  for (let j = arr.length - 1; j >= 0; j--) {
    reversedArr[reversedArr.length] = arr[j];
  }
  let count = 0;
  while (arr[count] == reversedArr[count] && count < arr.length) {
    count++;
  }
  if (count == arr.length || count > arr.length) {
    return true;
  } else {
    return false;
  }
}

function reverse(LL) {
  let arr = [];
  let reversedArr = [];
  let current = LL.head;
  while (current) {
    arr[arr.length] = current.value;
    current = current.next;
  }
  reversedArr = arr.reverse();
  // console.log(reversedArr);
  let currentNode = LL.head;
  // console.log(currentNode);

  for (let i = 0; i < reversedArr.length; i++) {
    let node = new Node(reversedArr[i]);
    if (!LL.head) {
      LL.head = node;
      // return LL.head;
    }
    // let count = 0;
    // console.log('osama', count < reversedArr.length - 1);
    // while (currentNode && count < reversedArr.length - 1) {
    // count++;
    currentNode.next = node;
    currentNode = currentNode.next;
  }
  return LL.head;
}
// }

function reverseList(LL) {
  let prevNode = null;
  let current = LL.head;
  while (current !== null) {
    let nextNode = current.next;
    current.next = prevNode;
    prevNode = current;
    current = nextNode;
  }

  return prevNode;
}

function osama(LL, index) {
  let current = LL.head;
  let length = 0;
  while (current) {
    current = current.next;
    length++;
  }
  if (index < 0 && index > length) {
    return;
  }

  let previous;
  let count = 0;

  // Remove first
  if (index === 0) {
    LL.head = currentNode.next;
  } else {
    while (count < index) {
      count++;
      previous = currentNode;
      currentNode = currentNode.next;
    }

    previous.next = currentNode.next;
  }
}

let ll = new LinkedList();
// let LL1 = new LinkedList();
// let LL2 = new LinkedList();
// ll.insert(5);
// ll.insert(4);
// ll.insert(3);
ll.append(1);
ll.append(2);
ll.append(3);
// ll.append(4);
// ll.append(5);
console.log(ll.removeAt(2));
// ll.append(2);
// ll.append(1);
// console.log(ll);
// const palindromee = palindrome(ll);
// const reversess = osama(ll, 1);

// console.log(reversess);

// console.log(zipper.toString());

module.exports = LinkedList;
