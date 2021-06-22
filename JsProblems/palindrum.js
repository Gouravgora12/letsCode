var isPalindrome = function(x) {
    const numberInverted = x.toString().split("").reverse().join("")
    return x ==numberInverted
    };
console.log(isPalindrome(-121))