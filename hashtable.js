class HashTable {
    constructor(size = 10) {
      this.table = new Array(size); // Create fixed-size storage array
    }
  
    // Very simple hash function: uses key length
    hash(key) {
      return key.length % this.table.length; // Ensures index is within bounds
    }
  
    // Store a value using a key
    set(key, value) {
      const index = this.hash(key);       // Get index from hash
      this.table[index] = value;          // Store value at hashed index
    }
  
    // Retrieve a value using a key
    get(key) {
      const index = this.hash(key);       // Get index from hash
      return this.table[index];           // Return value from that index
    }
  }