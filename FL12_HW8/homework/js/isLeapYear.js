function isLeapYear(input) {
    let dt = new Date(input);
    let yr = dt.getFullYear();
    if (isNaN(yr)) {
        return 'Invalid Date';
    } else {
        if ((yr % 100 !== 0) && (yr % 4 === 0) || (yr % 400 === 0)) {
            return `${yr} is a leap year`;
        } else {
            return `${yr} is not a leap year`;
        }
    }    
}

alert(isLeapYear('2021-01-15 13:00:00')); 
isLeapYear(2222222222222);