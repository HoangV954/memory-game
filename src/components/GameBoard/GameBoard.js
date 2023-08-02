import CardList from "../Cards/CardList";
import './gameBoard.scss' /* installed sass at the React folder already */
import { useContext } from "react";
import GameContext from "../Context/GameContext";
import Scoreboard from "../Scoreboard/Scoreboard";
import GameWon from "../Modal/GameWon";
import GameLost from "../Modal/GameLost";
import GameModal from "../Modal/GameModal";
import styled from 'styled-components';

const StyledGameBoard = styled.div.attrs({ className: 'game-board' })`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export default function GameBoard() {
    const { curDeck, gameWon, gameLost } = useContext(GameContext)
    const endgameModal = () => {
        if (gameWon) {
            return <GameModal visible={true} content={<GameWon />} />
        } else if (gameLost) {
            return <GameModal visible={true} content={<GameLost />} />
        }
    }

    return (
        <StyledGameBoard>
            <p>Game Board Assembled</p>
            <p>Cards here</p>
            <CardList cards={curDeck} />
            <Scoreboard />
            <div>{endgameModal()}</div>
        </StyledGameBoard>
    );
}