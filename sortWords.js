function sortWordsByLength(sentence) {
    
    const words = sentence.split(' ');

    words.sort((a, b) => a.length - b.length);

    return words.join(' ');
}

console.log(sortWordsByLength("Write a function that sorts words by length")); 

