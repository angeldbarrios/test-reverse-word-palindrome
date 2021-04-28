const assert = require('chai').assert;
const getReverseUseCase = require('../../use-cases/getReverseTextUseCase');

describe('getReverseUseCase', () => {
  it('should reverse word and say it is not palindrome', async () => {
    const word = 'testword';
    const wordResult = await getReverseUseCase(word);

    assert.deepEqual(wordResult, {
      palindrome: false,
      text: 'drowtset'
    });
  });

  it('should reverse word and say it is palindrome', async () => {
    const word = 'radar';
    const wordResult = await getReverseUseCase(word);
    
    assert.deepEqual(wordResult, {
      palindrome: true,
      text: 'radar'
    });
  });

  it('should reverse word with al least one uppercase letter and say it is palindrome', async () => {
    const word = 'Rotator';
    const wordResult = await getReverseUseCase(word);

    assert.deepEqual(wordResult, {
      palindrome: true,
      text: 'rotatoR'
    });
    // It detects palindromes word even with uppercase, other punctuation signs othen than a lowercase internally
    // but in text field it returns the reverse text with all signs or uppercase letters
  });


  it('should reverse text differents type of chars', async () => {
    const word = 'Eva, can I see bees in a cave?';
    const wordResult = await getReverseUseCase(word);
    
    assert.deepEqual(wordResult, {
      palindrome: true,
      text: '?evac a ni seeb ees I nac ,avE'
    });
  });
});