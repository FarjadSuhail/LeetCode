/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    if(nums.length ==0 || nums.length ==1) return false;
    
    let map = new Map();
    // for (let i=0; i<nums.length;i++){
        // if(!map.has(nums[i])){
            // map.set(nums[i],1);
        // }
        // else{
            // map.set(nums[i], map.get(nums[i])+1)
        // } 
    // }
    
    // Count the frequency of each element
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    let uniqueCount = map.size; // The number of distinct elements
    let halfLength = nums.length / 2;
    
    // iterate over a map
    for(let [key, value] of map){
        if(value > 2){
            return false;
        }
    }
    
    if(uniqueCount < halfLength) return false;
    return true;
    
    
};