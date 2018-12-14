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

    let reverseStr = reverseFunction(str);
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


// CSS


// Hungry for more?


// 2.
function insertDash(num) {
    let stringNum = num.toString();
    let stringDigits = stringNum.split("");
    let continuousOdds = 0;
    let indexArray = [];

    for(let i = 0; i < stringDigits.length; i++) {
        let digit = parseInt(stringDigits[i]);
        
        if(digit % 2 === 1){ //odd
            continuousOdds++;
            if(continuousOdds === 2) {
                indexArray.push(i);
                continuousOdds = 1;
            }
        } else  { // even
            continuousOdds = 0;
        }
    }

    stringDigits = addDash(stringDigits, indexArray);

    return stringDigits.join("");
}

function addDash(stringDigits, index) {
    let jump = 0;
    for(let i = 0; i < index.length; i++) {
        stringDigits.splice(index[i] + jump , 0, '-');
        jump++;
    }
    return stringDigits;
}

console.log(insertDash(454793));

// 3.
function reverseString(str) {
    let reverseStr = "";
    for(let i = 1; i < str.length + 1; i++) {
        let char = str.substr(-i, 1);
        reverseStr += char;
    }
    return reverseStr;
}

console.log(reverseString("hi how are you?"));

// 4.
function checkPalindromeWithSpace(str) {
    str = str.toLowerCase();
    str = eliminateSpace(str);
    let reverseStr = reverseFunction2(str);
    if(str.localeCompare(reverseStr) === 0) {
        return true;
    } else {
        return false;
    }    
}

function eliminateSpace(string) {
    let regE = /\s/g;
    return string.replace(regE, '');
}

function reverseFunction2(defaultStr) {
    return defaultStr.split("").reverse().join("");
}

console.log(checkPalindromeWithSpace("Bird rib"));  //true
console.log(checkPalindromeWithSpace("Sit on a potato pan Otis")); //true;

// 5.
function checkPalindromeWithPunctuation(str) {  
    str = str.toLowerCase();
    str = eliminateSpace(str);
    str = eliminatePunctuation(str);
    let reverseStr = reverseFunction2(str);
    
    if(str.localeCompare(reverseStr) === 0) {
        return true;
    } else {
        return false;
    }    
}

function eliminatePunctuation(string) {
    return string.replace(/[^a-z0-9\s]/g, "");
}

console.log(checkPalindromeWithPunctuation("Sit on a potato pan, Otis!!!")); //true
console.log(checkPalindromeWithPunctuation("A man, a plan, a canal: Panama.")); //true

// 6.
function wordPalindrome(str) {
    str = str.toLowerCase();
    str = eliminatePunctuation(str);
    let arrayOfReverseWords = reverseStrWithSpaces(str);

    if(str.localeCompare(arrayOfReverseWords) === 0) {
        return true;
    } else {
        return false;
    }
}

function reverseStrWithSpaces(stringWithSpaces) {
    return stringWithSpaces.split(" ").reverse().join(" ");
}

let str = "\"Son, I am able,\" she said. \"Though you scare me, watch!\" said I, \"Beloved,\" I said, \"watch me scare you!\" Though, said she: \"able am I, son.\"";
console.log(wordPalindrome(str));