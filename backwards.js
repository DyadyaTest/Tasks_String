//----Reversing the line backwards

decryptMessage('Привет');
function decryptMessage(message) {
    let decrypt = '';
    for (let i = message.length - 1; i >= 0; i--) {
        console.log(message[i]);
        decrypt += message[i]; 
    }
    message = decrypt;
    console.log(message);
    return message;
  }
