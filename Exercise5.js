//1. Let's Form a Sentence
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log (word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh);

//2. Index Accessing - 1 by 1
var word = 'Im Learning JavaScript ';
var firstWord = word[0] + word[1];
var secondWord  = word[3] + word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10];
var thirdWord  = word[11] + word[12] + word[13] + word[14] + word[15] + word[16] + word[17] + word[18] + word[19] + word[20] + word[21];

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);

//3. Breaking Sentence (Again) using Substring
var word = 'Im Learning JavaScript ';
var firstWord = word.substring(0, 2);
var secondWord  = word.substring(3, 11);
var thirdWord  = word.substring(12, 22);

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);

//4. Breaking Sentence (yet Again) and Count Each Length
var word = 'Im Learning JavaScript ';
var firstWord = word.substring(0, 2);
var secondWord  = word.substring(3, 11);
var thirdWord  = word.substring(12, 22);

var firstWordLength = firstWord.length;
var secondWordLength = secondWord.length;
var thirdWordLength = thirdWord.length;

console.log('First Word: ' + firstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);