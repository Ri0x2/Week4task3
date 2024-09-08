function filterArray(arr, predicate) {
    const result = [];

    for (const item of arr) {
        if (predicate(item)) {
            result.push(item);
        }
    }

    return result;
}


function isEven(num) {
    return num % 2 === 0;
}

console.log(filterArray([1, 2, 3, 4, 5, 6], isEven)); 

