import './loading.scss';
import chocobo from '../../assets/images/Game/loading.gif';
import sunnyBg from '../../assets/images/Game/sunny-bg.png';
import dawnBg from '../../assets/images/Game/dawn-bg.png';
import styled from 'styled-components';
import opened from '../../assets/images/Game/treasure-opened.png';
import closed from '../../assets/images/Game/treasure-closed.png';
import ReactHowler from "react-howler";
import loadingMusic from "../../assets/sound/modz-de-chocobo-trimmed.mp3";
import { useEffect, useState } from 'react';


const StyledLoading = styled.div.attrs({ className: 'loading-container' })`
    ${({ loadingTransition }) => loadingTransition ? `
    background-image: url(${sunnyBg});
    ` : `background-image: url(${dawnBg});`}
`

export default function Loading({ loadingState }) {
    const [transition, setTransition] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setTransition(false)
        }, 3000)
    }, [])

    return (
        <StyledLoading loadingTransition={transition}>
            <ReactHowler
                src={loadingMusic}
                preload={false}
                playing={loadingState}
                volume={0.2}

            />
            <img className='start' src={chocobo} alt='loading' />
            <img className='end' src={transition ? closed : opened} alt='loading-ended' />
            <p><span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span><span>.</span><span>.</span><span>.</span></p>
        </StyledLoading>
    );
}