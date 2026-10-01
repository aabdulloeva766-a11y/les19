// task21
function sayHello(name) {
    return "Привет, " + name + "!";
}
console.log(sayHello("Самир"));


// task22
function cube(x) {
    return x * x * x;
}
console.log(cube(3));


// task23
function average(a, b, c) {
    return (a + b + c) / 3;
}
console.log(average(5, 4, 6));


// task24
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("Али", "Рахимов"));


// task25
function showProduct(title, price) {
    console.log(title);
    console.log(price);
}
showProduct("Книга", 50);


// task26
function isPositive(number) {
    return number > 0;
}
console.log(isPositive(5));


// task27
console.log(isPositive(-3));


// task28
function isDivisible(a, b) {
    return a % b === 0;
}
console.log(isDivisible(10, 5));


// task29
console.log(isDivisible(10, 3));


// task30
function discountPrice(price, discount) {
    return price - price * discount / 100;
}
console.log(discountPrice(200, 10));


// task31
function celsiusToFahrenheit(c) {
    return c * 9 / 5 + 32;
}
console.log(celsiusToFahrenheit(25));


// task32
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else {
        return "F";
    }
}
console.log(getGrade(95));


// task33
console.log(getGrade(85));


// task34
console.log(getGrade(45));


// task35
function countDigits(number) {
    return Math.abs(number).toString().length;
}
console.log(countDigits(12345));


// task36
function repeat(text, count) {
    return text.repeat(count);
}
console.log(repeat("Hi ", 3));


// task37
function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}
console.log(sumTo(5));


// task38
function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}
console.log(factorial(5));


// task39
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log(maxOfThree(10, 25, 15));


// task40
function minOfThree(a, b, c) {
    return Math.min(a, b, c);
}
console.log(minOfThree(10, 25, 15));


// task41
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(17));


// task42
console.log(isPrime(20));


// task43
function reverseString(text) {
    return text.split("").reverse().join("");
}
console.log(reverseString("hello"));


// task44
function countVowels(text) {
    let count = 0;
    let vowels = "aeiou";

    for (let char of text.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
console.log(countVowels("hello"));




// task46
function isPalindrome(text) {
    return text === text.split("").reverse().join("");
}
console.log(isPalindrome("level"));


// task47
console.log(isPalindrome("hello"));


// task48
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([5, 12, 8, 20]));


// task49
function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([5, 12, 8, 20]));


// task50
function sumArray(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));


// task51
function countEven(arr) {
    let count = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            count++;
        }
    }

    return count;
}
console.log(countEven([1, 2, 3, 4, 5, 6]));


// task52
function countOdd(arr) {
    let count = 0;

    for (let num of arr) {
        if (num % 2 !== 0) {
            count++;
        }
    }

    return count;
}
console.log(countOdd([1, 2, 3, 4, 5, 6]));


// task53
function averageArray(arr) {
    let sum = 0;
for (let num of arr) {
        sum += num;
    }

    return sum / arr.length;
}
console.log(averageArray([10, 20, 30, 40, 50]));

// task54
function multiplyAll(arr) {
    let result = 1;

    for (let num of arr) {
        result *= num;
    }

    return result;
}

console.log(multiplyAll([2, 3, 4]));


// task55


// task56
function getNames(users) {
    return users.map(user => user.name);
}

console.log(getNames([
    { name: "Али" },
    { name: "Самир" }
]));


// task57
function findByName(users, name) {
    return users.find(user => user.name === name);
}

console.log(findByName([
    { name: "Али" },
    { name: "Самир" }
], "Самир"));


// task58
function totalPrice(products) {
    let sum = 0;

    for (let product of products) {
        sum += product.price;
    }

    return sum;
}

console.log(totalPrice([
    { name: "Книга", price: 50 },
    { name: "Ручка", price: 10 }
]));


// task59
function getDiscountedProducts(products) {
    return products.filter(product => product.price >= 100);
}

console.log(getDiscountedProducts([
    { name: "Книга", price: 50 },
    { name: "Ноутбук", price: 800 }
]));


// task60
function getStatistics(numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    let average = sum / numbers.length;
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);

    return {
        sum: sum,
        average: average,
        max: max,
        min: min
    };
}

console.log(getStatistics([10, 20, 30, 40]));
