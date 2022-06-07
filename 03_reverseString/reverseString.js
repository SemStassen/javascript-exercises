const reverseString = function(string) {
    let reverseString = ""
  for (let i = string.length; i >= 0; i--) {
      let part = string.substring(i, i+1)
      reverseString += part;
  }  
  return reverseString
};

// Do not edit below this line
module.exports = reverseString;
