/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   // using xor
    
    // let result = 0;

   // for (const num of nums) {
    //    result ^= num;
   // }

    // return result;
    
    //implementation using hashmap
    const map = new Map();
    
    // counting occurance
    for (const num of nums){
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }
        else {
            map.set(num,1)
        }
    }
    
    console.log(map);
    
    // find the number that appears only once
    for (const [key, value] of map) {
        if(value == 1){
            return key;
        }    
    }  
};