// Node class
class Node {
    constructor(val) {
      this.val = val;     // Value stored
      this.next = null;   // Pointer to next node
    }
  }
  
  // Linked list with basic add/print
  class LinkedList {
    constructor() {
      this.head = null;   // Start of list
    }
  
    append(val) {
      const node = new Node(val);
      if (!this.head) this.head = node;         // If empty, set head
      else {
        let curr = this.head;
        while (curr.next) curr = curr.next;     // Go to end
        curr.next = node;                       // Add new node
      }
    }
  
    print() {
      let curr = this.head;
      while (curr) {
        console.log(curr.val);                  // Print value
        curr = curr.next;                       // Move to next
      }
    }
  }