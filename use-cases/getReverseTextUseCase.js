'use strict';

const wordService = require('../services/wordService');


module.exports = async (text) => {
  // Add some extra validation if it necessary to filter some chars
  // or whatever

  const wordData = wordService.reverseWord(text);

  return {
    palindrome: wordData.palindrome,
    text: wordData.reverseWord,
    
    // clean text if neeeded (not spaces, punctuation marks
    // or anything which is not a letter or number
    
    // cleanText: wordData.cleanReverveWord

  };
};