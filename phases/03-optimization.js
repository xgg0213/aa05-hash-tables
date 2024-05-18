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
// console.log(newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz'));           // => true
// console.log(newAlphabet('leetcode', 'abcdefghijklmnopqrstuvwxyz'));       // => false
// console.log(newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz'));        // => true

function longestPalindrome(str) {
    // Palindrome has 2 options: 1) all character with even# appearances; 2) only 1 character has odd# appearance;

    // create an obj with #appearances for each character
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) obj[str[i]] += 1;
        else obj[str[i]] = 1;
    }

    let values = Object.values(obj);
    let countEven = 0;
    let countOdd = 0;

    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) countEven += values[i];
        else if(countOdd < values[i]) countOdd = values[i];
    }

    return countEven+countOdd;
}
// check answers
// console.log(longestPalindrome("abccccdd"));
// console.log(longestPalindrome("aeefffbccccdd")); // 'deccfffcced'
// console.log(longestPalindrome("aeefffbbccccdd")) // 'bdeccfffccedb'


function longestSubstr(str) {
    // create obj for each character of the string, keys.length is the longest substr without repeating characters
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) obj[str[i]] += 1;
        else obj[str[i]] = 1;
    }

    let keys = Object.keys(obj);
    return keys.length;
}
// check answers
// console.log(longestSubstr("abcabcbb"));      // => 3, where the longest substring is "abc"
// console.log(longestSubstr("bbbbb"));         // => 1, where the longest substring is "b"


function maxSubarr(arr) {
    // sort the array and create an obj with each integer and its appearances#
    arr.sort();
    
    
    let newArr = [];
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) obj[arr[i]] += 1;
        else obj[arr[i]] = 1;
    }

    let entries = Object.entries(obj);
    let count = 0;
    let res = new Set([]);
    for (let i = 0; i < entries.length-1; i++) {
        let el = entries[i];
        let el1 = entries[i+1];

        // for elements without +1;
        if (el[1] > count) {
            count = el[1];
            res = new Set([el[0]*1]) // 
        }

        // for paired elements within 1
        if ((el1[0] * 1 - el[0]*1 <= 1) && (el1[1] + el[1]) > count) {
            count = el1[1] + el[1];
            res = new Set([el[0]*1, el1[0]*1]) //el[0] * el[1] + el1[0] * el[1]; 
        } 
    }
    
    //create result array based on res, and return its length;
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.has(arr[i])) resArr.push(arr[i]); 
    }
    return resArr.length;



}
// check answers
console.log(maxSubarr([1,3,2,2,5,2,3,7]));  // => 5 because the longest subarray is [3,2,2,2,3]
console.log(maxSubarr([1,1,1,1,3]));  // => 4 because the longest subarray is [1,1,1,1]