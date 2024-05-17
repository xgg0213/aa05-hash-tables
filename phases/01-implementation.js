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

    for (let i = 0; i < data.length; i++) {
      
    }



  }


  delete(key) {
    // Your code here 

  }
}


module.exports = HashTable;


