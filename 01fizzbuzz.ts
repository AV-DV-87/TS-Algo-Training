/**
 * Write a program that prints the integers from 1 to 100 (inclusive).
 * But:
 *  - for multiples of three, print Fizz (instead of the number)
 *  - for multiples of five, print Buzz (instead of the number)
 *  - for multiples of both three and five, print FizzBuzz (instead of the number)
 */

//------------VERSION1------------
for (let index = 1; index < 101; index++) {
    let isFizz = index%3 === 0;
    let isBuzz = index%5 === 0;
    let isFizzBuzz = index%3 === 0 && index%5 === 0;
    let result = null;
    if(isFizzBuzz){
        result = "FizzBuzz";
        
    }else if(isFizz){
        result = "Fizz";
        
    }else if(isBuzz){
        result = "Buzz";
    }else{
        result = index;
    }
    console.log(result);
}
//------------VERSION2------------
//condition ternaire
for (let index = 1; index < 101; index++) {
    const isFizz = index%3 === 0;
    const isBuzz = index%5 === 0;
    const isFizzBuzz = index%3 === 0 && index%5 === 0;
    const result =
    isFizzBuzz
        ? "FizzBuzz"
        : isFizz
            ? "Fizz"
            : isBuzz
                ? "Buzz"
                : index;
    console.log(result);
}