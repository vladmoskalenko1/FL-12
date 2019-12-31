function makeNumber(string) {
    let num = '';
    for( let i = 0; i < string.length; i++ ) {
        if (isNaN(string[i]) === false) {
            num += string[i];
        }
    }
    return num;
}
makeNumber(3543534);