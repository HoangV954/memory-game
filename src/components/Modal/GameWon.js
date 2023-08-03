import ReactHowler from "react-howler";
import Button from "../Utils/Button";
import victorySound from "../../assets/sound/sound-victory.mp3";
import { useContext, useState, useRef, useEffect } from "react";
import GameContext from "../Context/GameContext";
import winnerVid from "../../assets/videos/Won.mp4";
import gameWonPic from "../../assets/images/Game/game-won.jpg";
import logo from "../../assets/images/Game/logo.jpg";
import useSound from 'use-sound';
import hoverSound from "../../assets/sound/sound-hover.wav";
import selectSound from "../../assets/sound/sound-select.wav";

export default function GameWon({ gameState }) {
    const { gameWon, reset } = useContext(GameContext);
    const [videoEnded, setVideoEnded] = useState(false);
    const [hover, { stop }] = useSound(hoverSound, { volume: 0.2 });
    const [select] = useSound(selectSound, { volume: 0.2 })

    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.volume = 0.1;
    }, []);

    const handleVideoEnded = () => {
        setVideoEnded(true);
    };

    return (
        <div className="victory-modal">
            {videoEnded ? (
                <>
                    <ReactHowler
                        src={victorySound}
                        preload={false}
                        playing={gameWon}
                        volume={0.2}
                    />
                    <div className="logo-container" onClick={() => {
                        gameState()
                    }}>
                        <img src={logo} alt="logo" className="logo" />
                        <p className="logo-text"><span>T</span>HE <span>M</span>EMORY <span>G</span>AME</p>
                    </div>
                    <p className="modal-text left won"><span>Y</span>ou</p>
                    <p className="modal-text right won"><span>W</span>on</p>
                    <Button textContent="Play again" onClick={() => {
                        select()
                        reset()
                    }} onMouseEnter={hover} onMouseLeave={() => stop()} name="modal-restart"></Button>
                </>

            ) : (<></>)}


            <div className="video">
                <video ref={videoRef} autoPlay width="100%"
                    height="75%" className={videoEnded ? " video-hidden" : "video-playing video-visible"}
                    onEnded={handleVideoEnded}>
                    <source src={winnerVid} type="video/mp4" />
                </video>

                <img src={gameWonPic} width="100%"
                    height="75%"
                    className={videoEnded ? "pic-visible" : "pic-hidden"}
                    alt="won-pic" />
            </div>

        </div>
    )
}