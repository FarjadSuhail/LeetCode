/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let i = 0;
  let j = 0;
  // Appending and Updating a string is not a 
  // efficient operation
  
  // i'll add strings as an array, later on join it.
  let res = [];

  // Merge characters from word1 and word2 alternately
  while (i < word1.length && j < word2.length) {
    res.push(word1[i]);
    res.push(word2[j]);
    i++;
    j++;
  }

  // Append the remaining characters from word1, if any
  if (i < word1.length) {
    res.push(word1.substring(i));
  }

  // Append the remaining characters from word2, if any
  if (j < word2.length) {
    res.push(word2.substring(j));
  }

  // Join the array into a string and return
  return res.join('');
    
};