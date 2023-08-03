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

const StyledGameBoard = styled.div.attrs({ className: 'game-board' })`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export default function GameBoard({ gameState }) {
    const { curDeck, gameWon, gameLost } = useContext(GameContext)
    const endgameModal = () => {
        if (gameWon) {
            return <GameModal visible={true} content={<GameWon gameState={gameState} />} />
        } else if (gameLost) {
            return <GameModal visible={true} content={<GameLost gameState={gameState} />} />
        }
    }

    return (
        <StyledGameBoard>
            <div className="logo-container" onClick={() => {
                gameState()
            }}>
                <img src={logo} alt="logo" className="logo" />
                <p className="logo-text"><span>T</span>HE <span>M</span>EMORY <span>G</span>AME</p>
            </div>
            <CardList cards={curDeck} />
            <Scoreboard />
            <div>{endgameModal()}</div>
        </StyledGameBoard>
    );
}