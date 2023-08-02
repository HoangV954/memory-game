import { useContext, useEffect, useState } from "react";
import GameContext from "../Context/GameContext";
import styled from 'styled-components';
import './Card.scss';
import ReactHowler from "react-howler";
import correctCard from '../../assets/sound/sound-card-chose.wav';
import wrongCard from '../../assets/sound/sound-card-incorrect.wav';

const StyledCard = styled.div.attrs({
    className: 'card'
})`
width: 235px;
height: 600px;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
position: relative;
padding-left: 19px;
z-index: -5;
background: linear-gradient(90deg, white 0%, rgb(242, 242, 194) 5%, rgb(242, 242, 194) 95%, white 100%);
box-shadow: rgb(227, 196, 73) 0px 30px 60px -19px inset, rgb(189, 153, 12) 0px 98px 96px -18px inset;
`

function Card({ character, isFlipped, setIsFlipped, num }) {
    const { handleSelectCard, entryStyle, setEntryStyle, setEntrySound } = useContext(GameContext)

    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setEntryStyle(false);
        }, 1500);
    }, [])

    const handleClick = () => {
        if (!entryStyle && !isFlipped) {

            setIsClicked(true)
            setIsFlipped(true)
            setEntrySound(false)
            setTimeout(() => {

                handleSelectCard(character)
                setIsClicked(false) /* Prevent audio firing twice. Caused by delayed rerender while isClicked is still true */
                setTimeout(() => {
                    setIsFlipped(false)

                }, 100)/* Just need to be later than handleSelectCard so it doesn't instantly turn to front*/
            }, 500)/* The 2nd setTimeout is to make sure the card finished its animation transition before rendering anew (shuffle function - at which point isFlipped is still true when new array is rendered so it just shows the card back - rotateY 180deg - ignoring transition. Can see the exception for cards staying at the exact same location w the same character since it was cached and running the animation as usual) */
        }
    }
    let cardClass = isFlipped ? "card-wrapper is-flipped" : "card-wrapper"
    let entryClass = entryStyle ? `finished-entry-${num}` : ""
    return (
        <div className={cardClass + " " + entryClass} onClick={handleClick}>
            <ReactHowler
                src={!character.clicked ? correctCard : wrongCard}
                preload={false}
                playing={isClicked}
                volume={0.2}
            />
            <div className="card-front"></div>
            <StyledCard>
                <img className="char-img" src={character.img} width="230" height="325" alt={character.name} />
            </StyledCard>
            <p className="char-name">{character.name}</p>
            <div className="card-back"></div>
        </div>
    )
}

export default Card
