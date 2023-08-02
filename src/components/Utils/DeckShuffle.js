import getDeckLength from "./DeckLength"
import { getCharsBasedOnDifficulty, allCharClicked } from "../Characters/characters";

const deckShuffle = (difficulty) => {
    let DeckLength = getDeckLength(difficulty);
    let CharSet = getCharsBasedOnDifficulty(difficulty);

    let NewRoundDeck = [];

    for (let i = 0; i < DeckLength; i += 1) {
        let selected = false;
        let randomNum;
        while (!selected) {
            randomNum = Math.floor(Math.random() * CharSet.length)
            if (!NewRoundDeck.includes(CharSet[randomNum])) {
                selected = true;
            }
        }
        NewRoundDeck.push(CharSet[randomNum]) /* Pick random cards based on the random array generated based on difficulty */

    }

    if (!allCharClicked(CharSet) && allCharClicked(NewRoundDeck)) {/* End game case: there's still card left in stock that has not been clicked && all the card picked randomly are clicked (need at least 1 that is not clicked in the current deck so the game can progress */
        let randomIndex = Math.floor(Math.random() * NewRoundDeck.length);
        let notClickedCharSet = CharSet.reduce((acc, c) => {
            if (c.clicked === false) {
                acc = [...acc, c]
            }
            return acc
        }, [])

        NewRoundDeck[randomIndex] = notClickedCharSet[Math.floor(Math.random() * notClickedCharSet.length)];
    }

    if (allCharClicked(CharSet)) {
        console.log("You Won")
    }

    return NewRoundDeck
}

export { deckShuffle }