function makeNumber(string) {
  let NewString = '';

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i])) {
        NewString += string[i];
       }
    }
    return NewString;
}
makeNumber('fhu43ry7g3rf3g1hhg62sljadw3g');