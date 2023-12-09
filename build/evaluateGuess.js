import { LetterState } from "./types.js";
import { MAX_WORD_SIZE } from "./env.js";
export function evaluateGuess(pickedWord, actualWord) {
    // if (pickedWord.length !== actualWord.length && actualWord.length !== MAX_WORD_SIZE) {
    // 	return [];
    // }
    // 1º set all letters to MISS
    const result = Array(MAX_WORD_SIZE).fill(LetterState.MISS);
    const lettersToCheck = pickedWord.split('');
    const guessLetters = actualWord.split('');
    // 2º set MATCH letters
    guessLetters.forEach((letter, i) => {
        if (pickedWord[i] === letter) {
            result[i] = LetterState.MATCH;
            lettersToCheck.splice(i === lettersToCheck.length ? i - 1 : i, 1);
        }
    });
    // 3º set PRESENT letters
    guessLetters.forEach((letter, i) => {
        if (lettersToCheck.includes(letter) && result[i] !== LetterState.MATCH) {
            result[i] = LetterState.PRESENT;
            lettersToCheck.splice(lettersToCheck.indexOf(letter), 1);
        }
    });
    // console.log(result);
    return result;
}
