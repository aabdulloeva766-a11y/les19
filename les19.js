function numbersInfo(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return {
        max: Math.max(...arr),
        min: Math.min(...arr),
        average: sum / arr.length,
        sum: sum
    };
}

console.log(numbersInfo([5, 2, 8, 10, 3]));