import { BackgroundManager } from "./userInterface/BackgroundManager.js";
export function colorizeLetters(turn, actualWord, evaluation) {
    const manager = new BackgroundManager;
    evaluation.forEach((state, position) => {
        // console.log(turn);
        // console.log(position);
        // console.log(state);
        // console.log(actualWord[position]);
        if (state == "MISS") {
            manager.changeCellBackground(turn, position, "wrongLetter");
            manager.changeKeyBackground(actualWord[position], "wrongLetter");
        }
        if (state == "PRESENT") {
            manager.changeCellBackground(turn, position, "misplacedLetter");
            manager.changeKeyBackground(actualWord[position], "misplacedLetter");
        }
        if (state == "MATCH") {
            manager.changeCellBackground(turn, position, "rightLetter");
            manager.changeKeyBackground(actualWord[position], "rightLetter");
        }
    });
}
