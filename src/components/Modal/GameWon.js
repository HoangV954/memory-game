import ReactHowler from "react-howler";
import Button from "../Utils/Button";
import victorySound from "../../assets/sound/sound-victory.mp3";
import { useContext, useState } from "react";
import GameContext from "../Context/GameContext";
import winnerVid from "../../assets/videos/Won.mp4";
import gameWonPic from "../../assets/images/Game/game-won.jpg";

export default function GameWon() {
    const { gameWon, reset } = useContext(GameContext)

    const [videoEnded, setVideoEnded] = useState(false)

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
                    <p className="modal-text left won">You</p>
                    <p className="modal-text right won">Won</p>
                    <Button textContent="Play again" onClick={reset} name="modal-restart"></Button>
                </>

            ) : (<></>)}


            <div className="video">
                <video autoPlay width="100%"
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