import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import 'focus-visible';

import avatar from '../../assets/carmen-sandiego.png';

import Tweet from '../Tweet';
import { TweetContext } from '../TweetContext';

const App = () => {

  const {state: state, actions: {generateFirstTweet, toggleLike, toggleRetweet} } = useContext(TweetContext);

  useEffect(() => {
    generateFirstTweet();
  }, []);

  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={new Date()}
        numOfLikes={state.numOfLikes}
        numOfRetweets={state.numOfRetweets}
        isLikedByCurrentUser={state.isLiked}
        isRetweetedByCurrentUser={state.isRetweeted}
        handleToggleLike={toggleLike}
        handleToggleRetweet={toggleRetweet}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
