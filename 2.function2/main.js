
function palindrome(message){
  // wirte your code here
  var str1 = message;
  var str2 = message.toLowerCase().split("").reverse().join("");
  if (str1 == str2) {
    // return true;
    console.log(true);
  }else{
    // return false;
    console.log(false);
  }
  
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true