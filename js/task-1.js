// Burada iki değişik şekilde yapım verilmiştir...

// ilkinde ödevde istenen yapı kullanımı
function slugify(title) {
  title = title.trim();

  // aksanları ve özel karakterleri değiştirin...
  let from = 'àáäâççèéëêğıìíïîñòóöôöşüùúüû·/_,:;';
  let to = 'aaaacceeeegiiiiinooooosuuuuu------';
  for (let i = 0, l = from.length; i < l; i++) {
    title = title.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  return title.toLowerCase().split(' ').join('-');
}

console.log('task-1.js sonuçları');
console.log('-------------------');
console.log('\n');
console.log('ilk yapı kullanımı');
console.log('-------------------');

console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

console.log('\n');

//ilk yapı sonu

// ikincide aksanları ve özel karakterleri değiştiren yapı verilmiştir.
function slugify2(title) {
  title = title.replace(/^\s+|\s+$/g, ''); // öndeki/sondaki boşlukları kırp
  title = title.toLowerCase(); // diziyi küçük harfe dönüştür

  // aksanları ve özel karakterleri değiştirin...
  let from = 'àáäâççèéëêğıìíïîñòóöôöşüùúüû·/_,:;';
  let to = 'aaaacceeeegiiiiinooooosuuuuu------';
  for (let i = 0, l = from.length; i < l; i++) {
    title = title.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  title = title
    .replace(/[^a-z0-9 -]/g, '') // alfanümerik olmayan tüm karakterleri kaldırın
    .replace(/\s+/g, '-') // boşlukları tirelerle değiştirin
    .replace(/-+/g, '-'); // ardışık tireleri kaldırın
  return title;
}

console.log('ikinci yapı kullanımı');
console.log('-------------------');

console.log(slugify2('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify2('English for developer')); // "english-for-developer"
console.log(slugify2('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify2('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

console.log('\n');

//ikinci yapı sonu
