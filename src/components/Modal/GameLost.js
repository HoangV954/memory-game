import ReactHowler from "react-howler";
import Button from "../Utils/Button";
import gameoverSound from "../../assets/sound/sound-game-over.mp3";
import { useContext, useState } from "react";
import GameContext from "../Context/GameContext";
import loserVid from "../../assets/videos/Lost.mp4";
import gameoverPic from "../../assets/images/Game/game-over.jpg"

export default function GameLost() {
    const { gameLost, reset } = useContext(GameContext);
    const [videoEnded, setVideoEnded] = useState(false)

    const handleVideoEnded = () => {
        setVideoEnded(true);
    };

    return (
        <div className="lost-modal">
            {videoEnded ? (
                <>
                    <ReactHowler
                        src={gameoverSound}
                        preload={false}
                        playing={gameLost}
                        volume={0.2}
                    />
                    <p className="modal-text left lost">You</p>
                    <p className="modal-text right lost">Lost</p>
                    <Button textContent="Try again" onClick={reset} name="modal-restart"></Button>
                </>

            ) : (<></>)}
            <div className="video">
                <video autoPlay muted width="100%"
                    height="75%" className={videoEnded ? " video-hidden" : "video-playing video-visible"}
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