import Button from "../Utils/Button";
import GameContext from "../Context/GameContext";
import { useContext } from "react";
import useSound from 'use-sound';
import hoverSound from "../../assets/sound/sound-hover.wav";
import selectSound from "../../assets/sound/sound-select.wav";



export default function GameMenu({ handleStartGame }) {
    const { setDifficulty } = useContext(GameContext) /*  Will not work without the GameContextProvider component in the parent component tree. The useContext(GameContext) hook in the GameMenu component expects to find a GameContext.Provider component up in the component tree to provide the context value. */
    const [hover, { stop }] = useSound(hoverSound, { volume: 0.2 });
    const [select] = useSound(selectSound, { volume: 0.2 })

    function handleDifficulty(e) {
        handleStartGame();
        setDifficulty(e.target.className)
        select()
    }

    return (
        <div className="game-menu">
            <p>Game Menu Ready!</p>
            <div className="btn-wrapper">
                <Button name={"easy"} textContent="Easy" onClick={(e) => { handleDifficulty(e) }} onMouseEnter={hover} onMouseLeave={() => stop()}></Button>
                <Button name={"medium"} textContent="Medium"
                    onClick={(e) => { handleDifficulty(e) }} onMouseEnter={hover} onMouseLeave={() => stop()}></Button>
                <Button name={"hard"}
                    textContent="Hard"
                    onClick={(e) => { handleDifficulty(e) }} onMouseEnter={hover} onMouseLeave={() => stop()}></Button>
            </div>
        </div>
    )
}