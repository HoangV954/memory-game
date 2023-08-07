import GameContext from "../Context/GameContext";
import { getCharsBasedOnDifficulty } from "../Characters/characters";
import { useContext } from "react";
import './scoreBoard.scss'

export default function Scoreboard() {
    const { difficulty, state } = useContext(GameContext)

    return (
        <div className="score-board">
            <p><span>R</span>ound: {state.score}/{getCharsBasedOnDifficulty(difficulty).length}</p>
            <p><span>C</span>urrent <span>s</span>core: {state.score}</p>
            <p><span>B</span>est <span>s</span>core: {state.bestScore}</p>
        </div>
    )
}