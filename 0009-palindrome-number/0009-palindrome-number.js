/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xStr = x.toString();
    
    // const reversedStr = str.split('').reverse().join('');
    // return str === reversedStr;
    
    // Lower Space Complexity: It uses O(1) extra space compared to O(n) for the first solution.
    for (let i=0,j=xStr.length-1;i<j;i++){
        if(xStr[i] != xStr[j]){
            return false;
        }
        j--;
    }
    return true;
};