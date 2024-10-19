class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

var reverseLinkedList = function (linkedlist) {
  var node = linkedlist;
  var previous = null;

  while (node) {
    // save next or you lose it!!!
    var save = node.next;
    // reverse pointer
    node.next = previous;
    // increment previous to current node
    previous = node;
    // increment node to next node or null at end of list
    node = save;
  }
  return previous; // Change the list head !!!
};

// Function to print the linked list
function printLinkedList(head) {
  let temp = head;
  while (temp !== null) {
    process.stdout.write(temp.data + " ");
    temp = temp.next;
  }
  console.log();
}

// Create a linked list with
// values 1, 3, 2, and 4
const head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(2);
head.next.next.next = new Node(4);

// Print the original linked list
process.stdout.write("Original Linked List: ");
printLinkedList(head);

// Reverse the linked list
reverseLinkedList(head);

// Print the reversed linked list
process.stdout.write("Reversed Linked List: ");
printLinkedList(head);
