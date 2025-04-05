//implementation

class Stack {
    constructor() {
      this.items = []; // Store elements
    }
  
    push(item) {
      this.items.push(item); // Add to top
    }
  
    pop() {
      return this.items.pop(); // Remove from top
    }
  
    peek() {
      return this.items[this.items.length - 1]; // View top
    }
  
    isEmpty() {
      return this.items.length === 0; // Check if empty
    }
  }
