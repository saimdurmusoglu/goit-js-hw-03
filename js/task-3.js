// Burada iki değişik şekilde yapım verilmiştir...

// ilkinde ödevde istenen yapı kullanımı
function filterArray(numbers, value) {
  const newArray = [];

  for (const number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
  }

  return newArray;
}

console.log('task-3.js sonuçları');
console.log('-------------------');
console.log('\n');
console.log('ilk yapı kullanımı');
console.log('-------------------');

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

console.log('\n');

//ilk yapı sonu

// ikincide slice ile kurulan yapı verilmiştir.
function filterArray2(numbers, value) {
  numbers.sort((a, b) => a - b); // Küçükten büyüğe sıralama
  let i = 0;
  while (numbers[i] <= value) {
    i += 1;
  }
  return numbers.slice(i, numbers.length);
}

console.log('ikinci yapı kullanımı');
console.log('-------------------');

console.log(filterArray2([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray2([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray2([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray2([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray2([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

console.log('\n');

//ikinci yapı sonu
