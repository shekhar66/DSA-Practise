class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertAtLast(data) {
    // If there is no other node
    if (this.size === 0) {
      return this.insertAtFirst(data);
    }
    const node = new Node(data);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
  }

  insertAtIndex(index, data) {
    if (index === 0) {
      return this.insertAtFirst(data);
    }
    if (index < 0 || index > this.size) {
      return console.log("Index outof range");
    }
    const node = new Node(data);
    let current = this.head;
    let previous;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = node;
    node.next = current;
    this.size++;
  }

  getAtIndex(index) {
    if (index < 0 || index > this.size - 1) {
      return console.log("Index outof range");
    }
    let current = this.head;
    let previous;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    console.log(current.data);
  }

  removeAtIndex(index) {
    if (index === 0) {
      this.head = current.next;
      this.size--;
      return;
    }
    let current = this.head;
    let count = 0;
    let previous;
    let temp;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    temp = current;
    previous.next = current.next;
    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertAtFirst(100);
ll.insertAtLast(200);
ll.insertAtIndex(2, 300);
ll.printData();
ll.getAtIndex(1);
ll.removeAtIndex(1);
ll.printData();
ll.clearList();
ll.printData();
