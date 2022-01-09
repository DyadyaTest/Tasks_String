//---Proposal to turn into an abbreviation

makeAbbr('У меня получается кодить!')
function makeAbbr(words) {
    let abbreviation = words[0];
    for ( let i = 1; i <= words.length; i++) {
        if (words[i] === ' ') {
            abbreviation += words[(i+1)];
        } else {
            abbreviation += '';
        }
    }
    console.log(abbreviation.toUpperCase());
    return abbreviation.toUpperCase();
  }