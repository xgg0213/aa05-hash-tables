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
let newArr = []
if (arr1.length > arr2.length) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      newArr.push(arr1[i])
    }
  }
}
if (arr2.length >= arr1.length) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      newArr.push(arr2[i])
    }
  }
  return newArr;
}
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

// Option 2 with array.includes: is this O(n)?
for (let i = 0; i < nums.length; i++) {
  if (nums.slice(0,i).concat(nums.slice(i+1)).includes(target-nums[i])) return true
}
return false;

}


function wordPattern(pattern, strings) {
  // Your code here 
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
