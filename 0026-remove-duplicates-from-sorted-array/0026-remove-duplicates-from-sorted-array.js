/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    // for(i = 0; i < nums.length - 1; i++) {
      // if(i > nums.length - 1) {
        // break;
      // }
      // if (nums[i] === nums[i + 1]) {
        // nums.splice(i, 1);
        // i--;
      // }
    // }
    // return nums.length;
    
   if (nums.length === 0) return 0;

    let i = 1;
    
    for (let j = 1; j < nums.length; j++) {
       if(nums[j] != nums[j-1]){
           nums[i] = nums[j];
           i++;
       }
    }
    
    return i;  
    
};