/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numToIndex = new Map();
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement
        let complement = target - nums[i];
       
        
        // Check if the complement is in the map
        if (numToIndex.has(complement)) {
        // If it is, return the indices of the complement and the current elements
            return [numToIndex.get(complement), i];
        }
        // Otherwise, add the current element and its index to the map
        numToIndex.set(nums[i], i);
    }
    
    // If no solution is found (though the problem guarantees there is one)
    throw new Error("No two sum solution");
};