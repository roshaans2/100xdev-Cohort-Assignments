/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isChar(c){
  return c>='a' && c<='z';
}

function isPalindrome(str) {
  str = str.toLowerCase();
  let n = str.length;
  let i = 0;
  let j = n-1;
  while(i<j){
    while(i<n && !isChar(str[i])){
      i++;
    }
    while(j>=0 && !isChar(str[j])){
      j--;
    }
    if(i<j && str[i++] != str[j--]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
