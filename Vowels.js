// -----Taking the vowels out of the line

removeVowels('I Maximum');

function removeVowels(doc) {  
    let result = doc.replace( /[aeiouyAEIOUY]/g, '' );
    console.log(result)
    return (result);
}
