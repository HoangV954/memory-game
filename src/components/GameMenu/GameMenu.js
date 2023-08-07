import Button from "../Utils/Button";
import GameContext from "../Context/GameContext";
import { useContext } from "react";
import useSound from 'use-sound';
import ReactHowler from "react-howler";
import hoverSound from "../../assets/sound/sound-hover.wav";
import selectSound from "../../assets/sound/sound-select.wav";
import menuMusic from "../../assets/sound/music-menu.mp3";
import './gameMenu.scss';


export default function GameMenu({ handleStartGame, setHintIsClicked, gameState }) {
    const { setDifficulty, setEntryStyle, setEntrySound } = useContext(GameContext) /*  Will not work without the GameContextProvider component in the parent component tree. The useContext(GameContext) hook in the GameMenu component expects to find a GameContext.Provider component up in the component tree to provide the context value. */
    const [hover, { stop }] = useSound(hoverSound, { volume: 0.2 });
    const [select] = useSound(selectSound, { volume: 0.2 });


    function handleDifficulty(e) {
        handleStartGame();
        setDifficulty(e.target.className);
        setEntryStyle(true)
        setEntrySound(true)
        select()
        setHintIsClicked(false)
    }

    return (
        <div className="game-menu">

            <ReactHowler
                src={menuMusic}
                preload={false}
                playing={!gameState}
                volume={0.1}
                loop={true}
            />

            <div className="logo"></div>
            <div class="menu-content">
                <p className="menu-header">Choose your desired difficulty:</p>
                <div className="btn-wrapper">
                    <Button name={"easy"} textContent="Easy" onClick={(e) => { handleDifficulty(e) }} onMouseEnter={hover} onMouseLeave={() => stop()}></Button>
                    <Button name={"medium"} textContent="Medium"
                        onClick={(e) => { handleDifficulty(e) }} onMouseEnter={hover} onMouseLeave={() => stop()}></Button>
                    <Button name={"hard"}
                        textContent="Hard"
                        onClick={(e) => { handleDifficulty(e) }} onMouseEnter={hover} onMouseLeave={() => stop()}></Button>
                </div>
            </div>
        </div>
    )
}