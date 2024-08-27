function hasTargetSum(array, target) {
  const number = new Set();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (number.has(complement)) {
      return true;
    }
    number.add(array[i]);
  }
  return false;
}



/* 
  Write the Big O time complexity of your function here
*/
/* 
  Time Complexity: O(n)
  Space Complexity: O(n)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
