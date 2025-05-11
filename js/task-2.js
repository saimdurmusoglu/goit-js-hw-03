// Burada iki değişik şekilde yapım verilmiştir...

// ilkinde ödevde istenen yapı kullanımı
function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    newArray.length = maxLength;
  }
  return newArray;
}

console.log('task-2.js sonuçları');
console.log('-------------------');
console.log('\n');
console.log('ilk yapı kullanımı');
console.log('-------------------');

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

console.log('\n');

//ilk yapı sonu

// ikincide slice ile kurulan yapı verilmiştir.
function makeArray2(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  return newArray.slice(0, maxLength);
}

console.log('ikinci yapı kullanımı');
console.log('-------------------');

console.log(makeArray2(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray2(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray2(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray2(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray2(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(
  makeArray2(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)
); // []

console.log('\n');

//ikinci yapı sonu
