function findDuplicates(arr) {
    const frequencyMap = {};
    const duplicates = [];

    
    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    
    for (const num in frequencyMap) {
        if (frequencyMap[num] > 1) {
            duplicates.push(Number(num));
        }
    }

    return duplicates;
}


console.log(findDuplicates([1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 9, 1])); 
