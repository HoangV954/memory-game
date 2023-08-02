import GameContext from "../Context/GameContext";
import { getCharsBasedOnDifficulty } from "../Characters/characters";
import { useContext } from "react";

export default function Scoreboard() {
    const { difficulty, state } = useContext(GameContext)

    return (
        <div className="score-board">
            <p>Round: {state.score}/{getCharsBasedOnDifficulty(difficulty).length}</p>
            <p>{state.score}</p>
            <p>{state.bestScore}</p>
        </div>
    )
}