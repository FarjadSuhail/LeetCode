/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // let len = candies.length;
    // let result = [];
    
    // const maxCandy = Math.max(...candies);
    // console.log(maxCandy);
    
    // for (let i =0;i<len;i++){
     // if(candies[i] + extraCandies >= maxCandy){
         // result[i] = true;
     // }
        // else{
            // result[i]=false;
        // }
    // }
    
    // return result;
    
  const maxCandies = Math.max(...candies);
  return candies.map(candy => candy + extraCandies >= maxCandies);

};