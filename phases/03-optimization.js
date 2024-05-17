function kth(str, n) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) obj[str[i]] += 1;
        else obj[str[i]] = 1;
    }

    let values = Object.values(obj).sort();
    let keyValue = values[values.length-n];

    for (let el in obj) {
        if (obj[el] == keyValue) return el;
    }
}

// check answers
// console.log(kth('aaabbc', 1));//  => 'a'
// console.log(kth('aaabbc', 2));//  => 'b'
// console.log(kth('aaabbc', 3));//  => 'c'

function newAlphabet(str1, str) {
    // option 1: with hashTable
    // class KeyValuePair {
    //     constructor(key, value) {
    //         this.key = key;
    //         this.value = value;
    //         this.next = null;
    //     }
    // }
    // class hashTable {
    //     constructor(numBuckets = str1.length){
    //         this.count = 0;
    //         this.capacity = numBuckets;
    //         this.data = new Array(this.capacity);
    //     }
    //     insert(key, val, index) {
    //         let node = new KeyValuePair(key, val);
    //         this.data[index] = node;
    //     }
    // }

    // let obj = {};
    // let list = new hashTable();

    // // create obj with key = 'a','b' etc. and value = 1,2 etc
    // for (let i = 0; i < str.length; i++) {
    //     if (i === 0) obj[str[i]] = 1;
    //     else obj[str[i]] = obj[str[i-1]] + 1;
    // }

    // // create linkedList for str1, with value based on obj
    // for (let i = 0; i < str1.length; i++) {

    //     let value = obj[str1[i]];
    //     let key = str1[i];

    //     list.insert(key, value, i);

    //     if (i > 0 && list.data[i].value < list.data[i-1].value) return false;

    // }
    // return true;

    // option 2: with array
    let obj = {};
    let arr = [];

    // create obj with key = 'a','b' etc. and value = 1,2 etc
    for (let i = 0; i < str.length; i++) {
        if (i === 0) obj[str[i]] = 1;
        else obj[str[i]] = obj[str[i-1]] + 1;
    }

    for (let i = 0; i < str1.length; i++) {
        let el = {};
        el[str1[i]] = obj[str1[i]];
        arr.push(el);

        if (i > 0 && arr[i][str1[i]] < arr[i-1][str1[i-1]]) return false;
    }

    return true;

}
// check answers
console.log(newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz'));           // => true
console.log(newAlphabet('leetcode', 'abcdefghijklmnopqrstuvwxyz'));       // => false
console.log(newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz'));        // => true