// Write a splitString function that takes a string and returns an array of
// string of two characters. If the string contains an odd number of characters, 
// then the second character must be replaced by an underscore ("_").

// Example:

// splitString('abc') === ['ab', 'c_']
// splitString('abcdef') === ['ab', 'cd', 'ef']

splitString('abcddsgzfhghmf');

function splitString(str) {
    let buff = '';
    let result = [];
    let leng = str.length;
    function isEven(leng){
        if (leng%2 == 0)
            return true;
        else
            return false;
    }
    if (isEven(leng) === false) {
        str += '_';
        console.log(str);
    }
    for (let i = 1; i <= str.length - 1; i += 2) {
        result.push(str[i-1]+str[i]);
        console.log(result);    
    }
    return result;
  }