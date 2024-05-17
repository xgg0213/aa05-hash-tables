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
  // Your code here 
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
