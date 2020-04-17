import React from 'react';
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

function Particle({angle, distance, children}) {
    //math stuff
    const convertDegreestoRadians = angle => (angle * Math.PI) / 180;

    const angleInRads = convertDegreestoRadians(angle);

    const x = Math.cos(angleInRads) * distance;
    const y = Math.sin(angleInRads) * distance;

    const spring = useSpring({
        transform: `translate(${x}px, ${y}px)`,
        opacity: 0,
        from: {
            transform: "translate(0px, 0px)",
            opacity: 1
        },
        config: {
            tension: 100,
            friction: 10
        }
    })

    return (
        <Particles style={{...spring}}>
            {children}
        </Particles>
    )
}

const Particles = styled(animated.div) `
    transition: transform 200ms linear;
    transition: opacity 500ms;
`

export default Particle
