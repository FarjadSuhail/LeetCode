/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const stack = [];
    const result = [];
    
    // Push all characters on stack
    for (const char of s){
        if(/[a-zA-Z]/.test(char)){
            stack.push(char)
        }
    }
    
    // Reverse the string
    for (const char of s){
        if(/[a-zA-Z]/.test(char)){
            result.push(stack.pop());
        }
        else{
            result.push(char);
        }
    }
    
    // convert the array to string
    return result.join('');
};