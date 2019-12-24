let first = +prompt('enter length of AB');
let second = +prompt('enter length of BC');
let third = +prompt('enter length of AC');

if (isNaN(first) || isNaN(second) || isNaN(third) || first === '' || second === '' || third === '') {
    console.log('input values should be ONLY numbers');
}else if(first<=0 || second<=0 || third<=0){
console.log('A triangle must have 3 sides with a positive definite length');
}else if(first + second < third || second + third < first || first + third < second){
    console.log('Triangle doesn’t exist');
}else if(first === second && second === third){
    console.log('Eequivalent triangle');
}else if(first === second || first === third || second === third){
    console.log('Isosceles triangle');
}else{
    console.log('Scalene triangle');
}