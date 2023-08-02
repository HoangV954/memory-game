import React, { createContext } from "react";
import useGame from "../Hooks/useGame";

const GameContext = createContext({})

export function GameContextProvider({ children }) {
    const { state, dispatch, difficulty, setDifficulty, curDeck, handleSelectCard, entryStyle, setEntryStyle, entrySound, setEntrySound, gameWon, gameLost, restartGame, reset } = useGame();

    return (
        <GameContext.Provider value={{ state, dispatch, difficulty, setDifficulty, curDeck, handleSelectCard, entryStyle, setEntryStyle, entrySound, setEntrySound, gameWon, gameLost, restartGame, reset }}>
            {children} {/* Has to be exactly "children", not any other names */}
        </GameContext.Provider>
    )
}

export default GameContext; /* This is for useContext, not the oldschool Provider */