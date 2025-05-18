function slugify(title) {
  // Türkçe büyük karakterleri küçük karakterlere dönüştür
  const turkishChars = {
    ç: 'c', ğ: 'g', ı: 'i', İ: 'i', ö: 'o', ş: 's', ü: 'u', Ç: 'c', Ğ: 'g', Ö: 'o', Ş: 's', Ü: 'u',
  };

  // Türkçe karakterleri dönüştür
  title = title
    .split('')
    .map(char => turkishChars[char] || char)
    .join('');

  // Alfanümerik olmayan karakterleri temizle: sadece harf, rakam, boşluk ve tireyi tut
  title = title
    .split('')
    .filter(char => /^[a-z0-9\s-]$/i.test(char))
    .join('');

  // Küçük harfe dönüştür, kelimeleri ayır, boşlukları tire ile birleştir
  return title.toLowerCase().split(/\s+/).join('-');
}

console.log('task-1.js sonuçları');
console.log('-------------------');

console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

console.log('\n');
