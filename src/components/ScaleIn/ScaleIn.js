import React from 'react';
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

function ScaleIn({children}) {

    const spring = useSpring({
        transform: "scale(1)",
        from: {
            transform: "scale(0)"
        },
        config: {
            tenstion: 200,
            friction: 10
        }
    })    
    
    return (
        <Springy style={{...spring}}>
            {children}
        </Springy>
    )
}

const Springy = styled(animated.div) `
    /* contains nothing */
`

export default ScaleIn
