
function reverseString(message){
  // wirte your code here
  var str = ""
  for (let i = message.length -1; i >= 0; i--) {
    str += message[i];
  }
  console.log(str);
}
reverseString('hello'); // should return 'olleh'