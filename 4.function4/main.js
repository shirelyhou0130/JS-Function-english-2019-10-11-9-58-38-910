
function countWords(message){
  // wirte your code here
  // var str = message.split(" ");
  // console.log(str);
  // return str.length;

  var count = 0;
  for (let i = 0; i < message.length; i++) {
    if (message[i] == " " || message[i] == ", " || message[i] == ".") {
      count ++;
    }
  }
  return count;
}
countWords('Good morning, I love JavaScript.'); // should return 5