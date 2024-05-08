const s1= "Ася, молоко около мяса"; // true
const s2= "A man, a plan, a canal: Panama"; // true
const s3= " "; // true
const s4= "race a car"; // false
const s5= "university" // false
const s6= "ab_a"; // true
const s8= "Я - дядя ежу. Уже я дядя..."; // true

// #3 Solution - эталонное решение
function isPalindromeV3(str) {
  if(!str.length) {
    return false;
  }

  str = str.toLowerCase().replace(/\W/g, '');

  const len = Math.floor(str.length / 2);

  for(let i = 0; i < len; i++) {
    if(str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
}

// #1 Solution
function isPalindrome(str) {
  str = str.toLowerCase().replace(/\W/g, '');
  return str === str.split('').reverse().join('');
}

/**
 * \W - берет все НЕ буквенные значения, кроме _ и также не учитывает кириллицу
 * поэтому есть второй вариант регулярки: /[^0-9a-zA-Zа-яА-ЯёЁ]/g
 * */

// Solution #2
function validateForChar(char) {
  // #1 Solution
  // return char.toUpperCase() === char.toLowerCase();
/**
   * Спецсимволы в верхнем и нижнем регистре ОДИНАКОВЫЕ
   * Для кирилиццы немного тяжелее [а-яА-Я]
   * Полная регулярка [0-9a-zA-Zа-яА-ЯЁё]
   * */

// #2 Solution
  return char.match(/[0-9a-zA-Zа-яА-ЯЁё]/) === null;
}

function isPalindromeV2(str) {
  if(!str.length) {
    return false;
  }

  let left = 0
  let right = str.length - 1;

  while(left < right) {
    const leftChar = str[left];
    const rightChar = str[right];

    if(validateForChar(leftChar)) {
      left += 1;
      continue;
    }

    if(validateForChar(rightChar)) {
      right -= 1;
      continue;
    }

    if(leftChar.toLowerCase() !== rightChar.toLowerCase()) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
}


console.log(isPalindromeV3('А роза упала на лапу Азора'))