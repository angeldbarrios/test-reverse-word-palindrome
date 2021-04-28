'use strict';

const notAllowedCharsRegExp = /[^A-Za-z0-9]/g;


function reverseWordHelper(word) {
  return word.split("").reverse().join("");
}

module.exports = {
  reverseWord(word) {
    if (typeof word !== 'string') {
      throw new TypeError('Parameter must be a string');
    }

    const cleanWord = word.toLowerCase().replace(notAllowedCharsRegExp, '');

    const reverseWord = reverseWordHelper(word);
    const cleanReverseWord = reverseWordHelper(cleanWord);

    return { reverseWord, cleanReverseWord, palindrome: cleanWord === cleanReverseWord };
  }
}
