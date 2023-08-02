import { useState, useEffect, useReducer } from "react";
import { deckShuffle } from "../Utils/DeckShuffle";
import { getCharsBasedOnDifficulty, resetChars } from "../Characters/characters";

const iniState = {
    score: 0,
    bestScore: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SCORE':
            return {
                score: state.score + 1,
                bestScore: state.score + 1 > state.bestScore ? state.score + 1 : state.bestScore
            }
        case 'RESTART_GAME':
            return {
                ...state,
                score: 0
            }
        default:
            return state
    }
}

function useGame() {
    const [difficulty, setDifficulty] = useState('easy'); /* Don't use '' as initial state, since difficulty ran rightaway twice - React strict mode. Need sth as placeholder especially if it is used in another func */
    const [curDeck, setCurDeck] = useState([]); /* getting the current deck (array of cards per round) */
    const [state, dispatch] = useReducer(reducer, iniState);
    const [gameWon, setGameWon] = useState(false);
    const [gameLost, setGameLost] = useState(false);
    const [entryStyle, setEntryStyle] = useState(true);
    const [entrySound, setEntrySound] = useState(false)

    useEffect(() => {
        setCurDeck(deckShuffle(difficulty))
        /* Set current deck using shuffle and player's chosen difficulty */
        setEntryStyle(true)
        setEntrySound(true)
    }, [difficulty])

    useEffect(() => {
        let maxScore = getCharsBasedOnDifficulty(difficulty).length;
        if (state.score === maxScore) {
            setGameWon(true)
        }
    }, [state])

    useEffect(() => {
        restartGame()
    }, [gameWon, gameLost])

    function handleSelectCard(char) {
        if (gameWon || gameLost) return; /* Prevent card clicking when game is settled */
        if (char.clicked === false) {
            char.clicked = true
            dispatch({ type: 'ADD_SCORE' })
        } else {
            setGameLost(true)
        }
        setCurDeck(deckShuffle(difficulty))
    }

    function reset() {
        setGameWon(false)
        setGameLost(false)
        setEntryStyle(true)
        setEntrySound(true)
        setTimeout(() => {
            setEntryStyle(false)
            setEntrySound(false)
        }, 1000)
    }

    function restartGame() {
        dispatch({ type: 'RESTART_GAME' })
        resetChars()
    }

    return { state, dispatch, difficulty, setDifficulty, curDeck, handleSelectCard, entryStyle, setEntryStyle, entrySound, setEntrySound, gameWon, gameLost, restartGame, reset }
}

export default useGame;