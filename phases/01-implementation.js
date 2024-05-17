class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here 
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);

  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here 
    if (this.capacity <= 0.7 * this.count) {
      this.resize()
    }
    let node = new KeyValuePair(key, value);
    this.count++;

    let index = this.hashMod(key);
    let current = this.data[index];

    while(current) {
      if (current.key === key) {
        current.value = value;
        this.count--;
        return;
      }
      current = current.next
    }

    let head = this.data[index];
    if (head) {
      node.next = head;
      this.data[index] = node;
    }
    this.data[index] = node;
    
  }

  read(key) {
    // Your code here
    let index = this.hashMod(key);
    let current = this.data[index];

    while(current) {
      if (current.key === key) return current.value;
      current = current.next;
    }
    return undefined;

  }


  resize() {
    // Your code here
    let capacity = this.capacity;
    let data = this.data;

    this.capacity = capacity * 2;
    this.data = new Array(this.capacity);
    this.count = 0;

    for (let i = 0; i < data.length; i++) {
      let current = data[i];
      while (current) {
        this.insert(current.key, current.value);
        current = current.next;
      }

    }



  }


  delete(key) {
    // Find the index in the array for a given key
    // Create a loop to iterate through possible linked lists

    let index = this.hashMod(key)
    let current = this.data[index]
    let prev = null;
    
    
    while (current && current.key !== key) { // While the current key does not match, then we continue to iterate
      prev = current;
      current = current.next
      }
      // Check that when a value is found, then do something (e.g. delete)
      // If there is no prev, then execute line 123 block.
      if (!current) {
        return "Key not found"
      }
      if (!prev) {
          this.data[index] = current.next;
          this.count--;
          return
      } else {
        prev.next = current.next
        this.count--;
      }
  }

}


module.exports = HashTable;


