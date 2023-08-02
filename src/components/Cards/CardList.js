import Card from "./Card";
import Tilt from 'react-parallax-tilt';
import styled from 'styled-components';
import { useState, useContext } from "react";
import ReactHowler from "react-howler";
import startSound from "../../assets/sound/sound-start-deck.wav";
import GameContext from "../Context/GameContext";

const StyledCardsContainer = styled.div.attrs({ className: 'cards-container' })`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    height: 100%;
    border: 1px solid blue;
    flex-wrap: wrap;
`


function CardList({ cards }) {
    const [isFlipped, setIsFlipped] = useState(false);
    /* The reason we inject flip here is to get ALL the cards to run flip animation,  not just a single card onClick */
    const { entrySound } = useContext(GameContext)

    return (
        <StyledCardsContainer>
            <ReactHowler
                src={startSound}
                preload={false}
                playing={entrySound}
                volume={0.2}
            />
            {cards.map((c, index) => (
                <Tilt key={c.id} glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" > {/* Card tilt effect */}
                    <Card character={c} isFlipped={isFlipped} setIsFlipped={setIsFlipped}
                        num={index} />
                </Tilt>
            ))}
        </StyledCardsContainer>
    )
}

export default CardList