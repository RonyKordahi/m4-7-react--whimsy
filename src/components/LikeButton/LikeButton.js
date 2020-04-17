import React from 'react';
import styled from 'styled-components';

import Heart from './Heart';
import PoppingCircle from "../PoppingCircle";
import ScaleIn from "../ScaleIn/ScaleIn";
import { range, sample } from "../../utils";
import ConfettiPiece from "../Confetti/ConfettiPiece";

const PARTICLE_COLORS = ['#e53935', '#1e88e5', '#43a047', '#fdd835', '#fb8c00'];

const LikeButton = ({ isLiked, size = 40 }) => {
  const heartSize = size * 0.6;

  //media stuff
  const query = "(prefers-reduced-motion: reduce)";
  const mediaQueryList = window.matchMedia(query);
  const shouldReduceMotion = mediaQueryList.matches;

  return (
    <Wrapper style={{ width: size, height: size }}>
      <Foreground>
        {isLiked && !shouldReduceMotion ? (
          <ScaleIn>
            {range(12).map(i => {
              return <ConfettiPiece
              key={i}
              angle={360 * (i / 12 )}
              distance={20}
              color={sample(PARTICLE_COLORS)}/>
            })}
            <Heart width={heartSize} isToggled={isLiked} />
          </ScaleIn>
        ) : (<Heart width={heartSize} isToggled={isLiked} />)}
      </Foreground>
      <Background>
        {isLiked && !shouldReduceMotion && <PoppingCircle size={size} color="#E790F7" />}
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  z-index: 0;
`;


export default LikeButton;
