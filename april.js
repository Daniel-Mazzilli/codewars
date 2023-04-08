function Node(data) {
  this.data = data;
  this.next = null;
}

// Implementing a Queue && Implementing a Queue - Performance Version
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.count = 0;
  }
  enqueue(item) {
    const node = new Node(item);
    if (this.count === 0) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
    this.count++;
  }
  dequeue() {
    if (this.count === 0) {
      return undefined;
    }
    const removed = this.first.data;
    this.first = this.first.next;
    this.count--;
    return removed;
  }
  size() {
    return this.count;
  }
}

// Find the K-th last element of a singly linked list
function getKthLastElement(head, k) {
  if (!head) {
    return false;
  }
  let count = 0;
  let current = head;
  while (current.next !== null) {
    current = current.next;
    count++;
  }
  const diff = count - k;
  if (diff < 0) {
    return false;
  }
  let secondCount = 0;
  current = head;
  while (secondCount < diff) {
    current = current.next;
    secondCount++;
  }
  return current;
}

// Linked Lists - Move Node
function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, dest) {
  dest = push(dest, source.data);
  source = source.next;
  return new Context(source, dest);
}

// Linked Lists - Remove Duplicates
function removeDuplicates(head) {
  let current = head;
  while (current !== null) {
    while (current.next !== null && current.data === current.next.data) {
      current.next = current.next.next !== undefined ? current.next.next : null;
    }
    current = current.next;
  }
  return head;
}

// Linked Lists - Append
function append(listA, listB) {
  let current = listA;
  while (current !== null && current.next !== null) {
    current = current.next;
  }
  listA !== null
    ? (current.next = listB)
    : listB === null
    ? (listA = null)
    : (listA = listB);
  return listA;
}

// Linked Lists - Insert Sort
function insertSort(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let newHead = new Node(head.data);
  while (head.next !== null) {
    newHead = sortedInsert(newHead, head.next.data);
    head = head.next;
  }
  return newHead;
}

// Linked Lists - Sorted Insert
function sortedInsert(head, data) {
  let current = head;
  let front = undefined;
  while (current !== null && current.data < data) {
    front === undefined
      ? (front = new Node(current.data))
      : (front = push(front, current.data));
    current = current.next;
  }
  head = push(current, data);
  while (front !== undefined && front !== null) {
    head = push(head, front.data);
    front = front.next;
  }
  return head;
}

// Linked Lists - Insert Nth Node
function insertNth(head, index, data) {
  const preData = [];
  let counter = 0;
  while (counter < index) {
    preData.push(head.data);
    head = head.next;
    counter++;
  }
  const newNode = new Node(data);
  newNode.next = head !== null ? { ...head } : null;
  head = newNode;
  while (counter > 0) {
    const currentHead = { ...head };
    head = new Node(preData.pop());
    head.next = currentHead;
    counter--;
  }
  return head;
}

// Linked Lists - Get Nth Node
function getNth(node, index) {
  // Your code goes here.
  if (index === 0) {
    if (node.data === null || node.data === undefined) {
      throw new Error("Invalid index!");
    }
    return node;
  }
  return getNth(node.next, index - 1);
}

const linkedList = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  },
};

console.log(insertNth(linkedList));
