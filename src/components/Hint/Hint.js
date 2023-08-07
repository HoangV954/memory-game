import './hint.scss';
import { IoClose } from 'react-icons/io5';
import { IconContext } from "react-icons";
import { useContext } from 'react';
import GameContext from '../Context/GameContext';
import Button from '../Utils/Button';
import useSound from 'use-sound';
import hintHoverSound from '../../assets/sound/sound-chocobo-kweh-trimmed.mp3';
import hintClickedSound from '../../assets/sound/sound-chocobo-woheeho-trimmed.mp3';
import hoverSound from "../../assets/sound/sound-hover.wav";
import selectSound from "../../assets/sound/sound-select.wav";
import Typewriter from 'typewriter-effect';

export default function Hint({ hintIsClicked, setHintIsClicked }) {

    const { setEntrySound } = useContext(GameContext);
    const [hintHover, { stop }] = useSound(hintHoverSound, { volume: 0.2 });
    const [hintClicked] = useSound(hintClickedSound, { volume: 0.2 });
    const [hover] = useSound(hoverSound, { volume: 0.2 });
    const [select] = useSound(selectSound, { volume: 0.2 });

    const handleHint = () => {
        setHintIsClicked(true);
        setEntrySound(false);
        hintClicked()
    }


    let hintClass = hintIsClicked ? "full" : "half";

    return (
        <>
            <Button name={"hint"} onClick={handleHint} onMouseEnter={hintHover} onMouseLeave={() => stop()}></Button>
            <div className={"hint-helper " + hintClass}>
                {!hintIsClicked ? (<div className='thought'>Kweh?</div>) :
                    (<IconContext.Provider value={{ className: 'icon-close', color: 'rgb(253, 218, 82)' }}>
                        <div className='speech'>
                            <div className="bubble">
                                <p className="message">
                                    <Typewriter options={{
                                        delay: 30,
                                        cursor: '',
                                    }}
                                        onInit={(typewriter) => {
                                            typewriter.typeString('Kweeehh!?..Maybe I shouldn\'t click the same card two times in a row..').start();
                                        }} />
                                </p>
                                <IoClose onClick={() => {
                                    setHintIsClicked(false)
                                    select()
                                }} onMouseEnter={hover} />
                            </div>
                            <div className='bubble-arrow'></div>
                        </div>
                    </IconContext.Provider>)}
            </div>
        </>
    )
}