const ht = new HashTable();  // Create a new hash table
ht.set("a", 1);              // Store key "a" with value 1
ht.set("bb", 2);             // Store key "bb" with value 2

console.log(ht.get("a"));    // Output: 1
console.log(ht.get("bb"));   // Output: 2