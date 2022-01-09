//---Checking lines for a werewolf

isWerewolf('Was it a rat I saw?')
function isWerewolf(target) {
    let result = target.replace( /[!?,.]/g, '' );
    target = result;
    let direct = '';
    for (let i = 0; i <= target.length - 1; i++) {       
        if ( target[i] != ' ') {
           direct += target.toLowerCase()[i]; 
           console.log(direct);
           } 
    }
    let werewolf = '';
     for (let i = target.length - 1; i >= 0; i--) {      
         if ( target[i] != ' ') {
            werewolf += target.toLowerCase()[i]; 
            console.log(werewolf);
            } 
     }  
     if (direct === werewolf) {
         return true;
     } else {
     return false;
    }
  }
