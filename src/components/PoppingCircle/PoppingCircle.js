import React from 'react'
import styled, { keyframes } from "styled-components";

function PoppingCircle({ size, color }) {
    return (
        <Circle style={{
            background: color,
            width: size,
            height: size
        }} />
    )
}

const scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

const fade = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const Circle = styled.div `
    animation: ${fade} 500ms ease-in forwards,
        ${scale} 300ms forwards;
    border-radius: 100px;
`

export default PoppingCircle
