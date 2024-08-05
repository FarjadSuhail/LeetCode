/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    
    // Get digits from the string
  let digits = s
    .split("")
    .filter((char) => !isNaN(char) && char >= "0" && char <= "9");

  console.log(digits);

  // convert digits to integers
  digits = digits.map(Number);
  console.log(digits);

  // Create a set to get unique digits
  let uniqueDigits = new Set(digits);
  console.log(uniqueDigits);

  // Convert the set back to an array and sort it in descending order
  uniqueDigits = Array.from(uniqueDigits).sort((a, b) => b - a);
  console.log(uniqueDigits);

  // Check if there is a second largest digit
  if (uniqueDigits.length < 2) {
    return -1;
  } else {
    return uniqueDigits[1];
  }
};