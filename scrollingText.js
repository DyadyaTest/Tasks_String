// Создай функцию scrollingText, которая принимает строку как параметр, 
// последовательно переставляет все символы в строке с нулевого индекса 
// на последний и возвращает массив с полученными комбинациями в этой 
// строке в верхнем регистре.

// Пример

// scrollingText("robot")

// Возвращает:
// [ "ROBOT",
//   "OBOTR",
//   "BOTRO",
//   "OTROB",
//   "TROBO" ]

scrollingText('robot');

function scrollingText(word) {
    let result = [];
    result[0] = word.toUpperCase();
    let leng = word.length -1;
    for (let i = 0; i <= word.length-2; i++) {
        let buff = '';
        let text = word;
        buff = word.substr(0,i+1) ;
        text = word.substr(i+1,leng-i+1);
        result[i+1] = text.toUpperCase() + buff.toUpperCase(); 
    }
    console.log(result);
    return result;
  }