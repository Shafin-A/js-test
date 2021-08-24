export function getFizzBuzzUntil(n) {
    // FizzBuzz
    let arr = [];

    for (let i = 0; i < n; i++) {
        if (( (i + 1) % 3 === 0 ) && ( (i + 1) % 5 === 0 )) {
            arr.push("FizzBuzz");
        }
        else if ( (i + 1) % 3 === 0 ){
            arr.push("Fizz");
        }
        else if ( (i + 1) % 5 === 0 ) {
            arr.push("Buzz");
        }
        else {
            arr.push(i+1)
        }
    }

    return arr;
}
