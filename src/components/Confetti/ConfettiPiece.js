import React from 'react';
import styled from "styled-components";

import Particle from "./Particle";

function ConfettiPiece({color, angle, distance}) {
    return (
        <CenteredWithinParent>
            <Particle angle={angle} distance={distance}>
                <Dot style={{background: color}} />
            </Particle>
        </CenteredWithinParent>
    )
}

const CenteredWithinParent = styled.div `
    display: flex;
    justify-content: center;
    position: absolute;
    top: 42%;
    left: 42%;
`

const Dot = styled.div `
    height: 4px;
    width: 4px;
    border-radius: 1000px;
`

export default ConfettiPiece
