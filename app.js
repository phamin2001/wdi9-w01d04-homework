// Homework - W01d04

// 1. Verbal questions
// 1: Parameters are the names listed in the function definition. Arguments are the actual values that 
// passed into the functions when the functions is called. 
// 2. with console.log we are printing an output of the function 
// but with return, function returning a result of the function to where it was called.
// 3. we could use that reurn value as much as we want in diffrent part of our program 

// 2. Palindrome again
function checkPalindrome(str) {
    str = str.toLowerCase();

    reverseStr = reverseFunction(str);
    if(str.localeCompare(reverseStr) === 0) {
        console.log(true);
    } else {
        console.log(false);
    }    
}

function reverseFunction(defaultStr) {
    return defaultStr.split("").reverse().join("");
}

checkPalindrome("RadaR"); //true
checkPalindrome("Borscht"); //false

// 3. Digit Sum
function sumDigits(num) {
    let strNum = num.toString();
    let digits = strNum.split("");
    let sumOfDigits = 0;
    for(let i = 0; i < digits.length; i++) {
        sumOfDigits += parseInt(digits[i], 10);
    }
    return sumOfDigits;
}

console.log(sumDigits(42));

// 4. Pythagoras
function calculateSide(perpendicular, base) {
    powerOfHypotenuse = Math.pow(perpendicular, 2) + Math.pow(base, 2);
    let hypotenuse = Math.sqrt(powerOfHypotenuse);
    return hypotenuse;
}

console.log(calculateSide(10, 6));

// 5. Sum Array
function sumArray(arrayOfNum){
    let sum = 0;
    for(let i = 0; i < arrayOfNum.length; i++) {
        sum += arrayOfNum[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6. Prime Numbers
function checkPrime(num) {
    if(num < 2) {
        return false;
    } else{
        let squareOfNum = Math.sqrt(num);
        for(let i = 2; i < squareOfNum + 1; i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return true;        
    }    
}

console.log(checkPrime(11));

function printPrimes(num) {
    for(let i = 0; i < num + 1; i++) {
        if(checkPrime(i)) {
            console.log(i + " is prime.");
        }
    }
}

printPrimes(97);