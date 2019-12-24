let a=+prompt('Enter value for a: ');
let b=+prompt('Enter value for b: ');
let c=+prompt('Enter valeu for c: ');
let d=Math.pow(b, two)-four*a*c;
let x;
let x1;
let x2;
let two=2;
let four=4;
if(isNaN(a) || isNaN(b) || isNaN(c) ) {
	console.log('Invalid input data');
	} else if(d===0){
x=Math.round(-b/(two*a));
console.log(`x = ${x}`);
} else if(d>0){
    x1 = Math.round((-b+Math.sqrt(d))/(two*a));
    x2 = Math.round((-b-Math.sqrt(d))/(two * a));
    console.log(`x1 = ${x1} ; x2 = ${x2}`);
	} else if(d<0) {
console.log(`No solution`);
}
