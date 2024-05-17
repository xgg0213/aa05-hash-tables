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
  // Your code here 
}


function twoSum(nums, target) {
  // Your code here 
}


function wordPattern(pattern, strings) {
  // Your code here 
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
