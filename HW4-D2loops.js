function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}
function vowelsAndConsonants(s) {
    const m = s.split('');
    const cons = [];
    m.forEach(i => {
        if(isVowel(i)) console.log(i);
        else cons.push(i);
    })
    cons.forEach(i =>{
        console.log(i)
    })
}

vowelsAndConsonants('javascript')