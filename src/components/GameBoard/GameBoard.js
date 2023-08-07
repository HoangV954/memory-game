import CardList from "../Cards/CardList";
import './gameBoard.scss' /* installed sass at the React folder already */
import { useContext } from "react";
import GameContext from "../Context/GameContext";
import Scoreboard from "../Scoreboard/Scoreboard";
import GameWon from "../Modal/GameWon";
import GameLost from "../Modal/GameLost";
import GameModal from "../Modal/GameModal";
import styled from 'styled-components';
import logo from "../../assets/images/Game/logo.jpg";
import ReactHowler from "react-howler";
import gameplayMusic from "../../assets/sound/shuffle-boogie-trimmed.mp3";

const StyledGameBoard = styled.div.attrs({ className: 'game-board' })`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export default function GameBoard({ gameState, hintIsClicked, setHintIsClicked }) {
    const { curDeck, gameWon, gameLost, reset, restartGame, entryStyle, setEntrySound, setEntryStyle } = useContext(GameContext)

    const handleLogo = () => {
        if (!entryStyle) {
            reset();
            restartGame();
            gameState(false);
            setEntrySound(true);
            setEntryStyle(true);
            setHintIsClicked(false)
        } else {
            return null;
        }
    }
    const endgameModal = () => {
        if (gameWon) {
            return <GameModal visible={true} content={<GameWon handleLogo={handleLogo} />} />
        } else if (gameLost) {
            return <GameModal visible={true} content={<GameLost handleLogo={handleLogo} />} />
        }
    }

    return (
        <StyledGameBoard>
            {(!gameWon && !gameLost) ? (
                <ReactHowler
                    src={gameplayMusic}
                    preload={false}
                    playing={(!gameWon && !gameLost)}
                    volume={0.2}
                    loop={true}
                />
            ) : (<></>)}

            <div className="logo-container" onClick={() => {
                handleLogo()
            }}>
                <img src={logo} alt="logo" className="logo" />
            </div>
            <CardList cards={curDeck} hintIsClicked={hintIsClicked} />
            <Scoreboard />
            <div>{endgameModal()}</div>
        </StyledGameBoard>
    );
}