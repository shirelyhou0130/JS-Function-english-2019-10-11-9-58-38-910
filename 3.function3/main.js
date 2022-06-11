
function alphabetSort(message){
  message = message.split("");
  for (let i = 0; i < message.length; i++) {
    for (let j = 0; j < message.length; j++) {
      if (message[i] < message[j]) {
        var flag = message[i];
        message[i] = message[j];
        message[j] = flag;
      }
    }
  }
  return message.join("");
}
alphabetSort('hello'); // should return 'ehllo'