import ReactHowler from "react-howler";
import Button from "../Utils/Button";
import gameoverSound from "../../assets/sound/sound-game-over.mp3";
import { useContext, useState } from "react";
import GameContext from "../Context/GameContext";
import loserVid from "../../assets/videos/Lost.mp4";
import gameoverPic from "../../assets/images/Game/game-over.jpg";
import logo from "../../assets/images/Game/logo.jpg";
import useSound from 'use-sound';
import hoverSound from "../../assets/sound/sound-hover.wav";
import selectSound from "../../assets/sound/sound-select.wav";

export default function GameLost({ handleLogo }) {
    const { gameLost, reset } = useContext(GameContext);
    const [videoEnded, setVideoEnded] = useState(false);
    const [hover, { stop }] = useSound(hoverSound, { volume: 0.2 });
    const [select] = useSound(selectSound, { volume: 0.2 })

    const handleVideoEnded = () => {
        setVideoEnded(true);
    };

    return (
        <div className="lost-modal">
            <ReactHowler
                src={gameoverSound}
                preload={false}
                playing={gameLost}
                volume={0.2}
            />
            {videoEnded ? (
                <>
                    <div className="logo-container" onClick={() => {
                        handleLogo()
                    }}>
                        <img src={logo} alt="logo" className="logo" />
                        <p className="logo-text"><span>T</span>HE <span>M</span>EMORY <span>G</span>AME</p>
                    </div>
                    <p className="modal-text left lost"><span>Y</span>ou</p>
                    <p className="modal-text right lost"><span>L</span>ost</p>
                    <Button textContent="Try again" onClick={() => {
                        select()
                        reset()
                    }} onMouseEnter={hover} onMouseLeave={() => stop()} name="modal-restart"></Button>
                </>

            ) : (<></>)}
            <div className="video">
                <video autoPlay muted width="100vw"
                    height="100vh" className={videoEnded ? " video-hidden" : "video-playing video-visible"}
                    onEnded={handleVideoEnded}>
                    <source src={loserVid} type="video/mp4" />
                </video>

                <img src={gameoverPic} width="100%"
                    height="75%"
                    className={videoEnded ? "pic-visible" : "pic-hidden"}
                    alt="lost-pic" />

            </div>
        </div>
    )
}