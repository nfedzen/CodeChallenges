#!/usr/bin/env node

const twoNumberSum = (numbers, target) => {

};

console.log(twoNumberSum([4, 6], 10)); // [4, 6]
console.log(twoNumberSum([6, 6, 1], 5)); // [1, 4]
console.log(twoNumberSum([4, 6, 1, -3], 3)); // [-3, 6]
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [-1, 11]
console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)); // [8, 9]
console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)); // [3, 15]
console.log(twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)); // [-5, 0]
console.log(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163)); // [-47, 210]
console.log(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164)); // []
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15)); // []
