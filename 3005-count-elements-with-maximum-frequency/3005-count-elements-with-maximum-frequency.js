/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freqCount = new Map();
    
    // find occurance
    for (const num of nums){
        if(freqCount.has(num)){
            freqCount.set(num, freqCount.get(num)+1);
        }
        else{
            freqCount.set(num,1)
        }
    }
    
    // find the maximum freq
    let maxFreq = 0;
    
    for(const freq of freqCount.values()) {
        if(freq > maxFreq){
            maxFreq = freq;
        }
    }
    
    // total 
    let total = 0;
    for (const freq of freqCount.values()) {
        if (freq === maxFreq) {
            total += freq;
        }
    }
    
    
    console.log(freqCount);
    console.log(maxFreq);
    console.log(total);
    
    return total;
};