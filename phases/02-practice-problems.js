function anagrams(str1, str2) {
let sort1 = str1.split("").sort()
let sort2 = str2.split("").sort()

if (sort1.length === sort2.length) {
for (let i = 0; i < sort1.length; i++) {
if (sort1[i] !== (sort2[i])) {
  return false
}
}
return true
}
return false
}


function commonElements(arr1, arr2) {
// option 1: use array.includes: is this O(n^2)?
// let newArr = []
// if (arr1.length > arr2.length) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       newArr.push(arr1[i])
//     }
//   }
// }
// if (arr2.length >= arr1.length) {
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.includes(arr2[i])) {
//       newArr.push(arr2[i])
//     }
//   }
// }
// return newArr;

// option 2: use obj, O(n);
let newArr = [...arr1, ...arr2];
let obj = {};
let res = [];

for (let i = 0; i < newArr.length; i++) {
  if (obj[newArr[i]]) obj[newArr[i]]++;
  else obj[newArr[i]] = 1;
}

for (let el in obj) {
  if (obj[el] >= 2) res.push(el * 1);
}
return res;

}


function duplicate(arr) {
let obj = {}

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i])
if (obj[arr[i]]) {
  obj[arr[i]]++
} else {
  obj[arr[i]]=1
}
}
// if the value is equal or larger than 2 than return
// get object.values
// get Object.keys
// Find index in object.values when is duplicate, then find it in Object.keys
for (let el in obj) {
  if (obj[el] === 2) {
    return el * 1 // force a string into an integer
  }
}
}


function twoSum(nums, target) {

// O(n^2) solution
// for (let i = 0; i < nums.length; i++) {

// for (let j = i+1; j < nums.length; j++) {

//   let sum = nums[i] + nums[j]

// if (sum === target) {
//   return true
// }
// }
// }
// return false

// Option 2 with array.includes: still O(n) as array.includes is also O(n)
// for (let i = 0; i < nums.length; i++) {
//   if (nums.slice(0,i).concat(nums.slice(i+1)).includes(target-nums[i])) return true
// }
// return false;

// Option 3: using Set, which is O(1)
let set = new Set([]); // initialize a set variable as an empty set

for (let i = 0; i < nums.length; i++) {
  if (set.has(nums[i])) { // check if nums[i] has a counterpart that adds up to target
    return true;
  }
  set.add(target-nums[i]); // add the needed counterpart to the set if not found yet
}
return false;

}


function wordPattern(pattern, strings) {
  // Your code here 
  // if the length of pattern and string does not match, return false;
  if (pattern.length !== strings.length) return false;

  // when the lengths match
  // initialize a set & obj
  let obj = {}; // store the unique elements in pattern as key; the 1st matching strings (with the same index) as value;
  let set = new Set([]); // store the unique elements in pattern
  let setValue = new Set([]) // store unique values in strings

  // iterate through the string & pattern at the same time
  for (let i = 0; i < pattern.length; i++) {
    let key = pattern[i];
    let value = strings[i];

    // return false if the key exists but value differs
    if (set.has(key) && obj[key] !== value) return false;

    // return false if the key does not exist but value already exists
    if (!set.has(key) && setValue.has(value)) return false;

    // else adding the key and value to the set and obj;
      set.add(key);
      obj[key] = value;
      setValue.add(value);
    
  }
  return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];


// console.log(wordPattern("ABBA", ['dog', 'cat', 'cat', 'dog']))//.to.be.true;
console.log(wordPattern("ABBA", ['dog', 'dog', 'dog', 'dog']))//.to.be.false;
// console.log(wordPattern("AAAA", ['dog', 'dog', 'dog', 'dog']))//.to.be.true;
// console.log(wordPattern("ABCD", ['dog', 'cat', 'dog', 'cat']))//.to.be.false;