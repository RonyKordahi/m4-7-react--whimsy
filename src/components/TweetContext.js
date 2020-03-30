import React, { useReducer } from 'react';

export const TweetContext = React.createContext();

const initialState = {
    "numOfLikes": 100,
    "numOfRetweets": 100,
    "isLiked": false,
    "isRetweeted": false
}

function reducer(state, action) {
    switch(action.type) {
        case "first-tweet": {
            return {
                ...initialState
            }
        }

        case "handle-toggle-like": {
            if (!state["isLiked"])
            return {
                ...state,
                "numOfLikes": state["numOfLikes"] + 1,
                "isLiked": true
            }
            else {
                return {
                    ...state,
                    "numOfLikes": state["numOfLikes"] - 1,
                    "isLiked": false
                }
            }
        }

        case "handle-toggle-retweet": {
            if (!state["isRetweeted"])
            return {
                ...state,
                "numOfRetweets": state["numOfRetweets"] + 1,
                "isRetweeted": true
            }
            else {
                return {
                    ...state,
                    "numOfRetweets": state["numOfRetweets"] - 1,
                    "isRetweeted": false
                }
            }
        }

        default: {
            throw new Error("Unauthorized action!");
        }
    }
}

export const TweetProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const generateFirstTweet = () => {
        dispatch({
            type: "first-tweet"
        })
    }

    const toggleLike = () => {
        dispatch({
            type: "handle-toggle-like"
        })
    }

    const toggleRetweet = () => {
        dispatch({
            type: "handle-toggle-retweet"
        })
    }

    return (
        <TweetContext.Provider
        value={{state,
        actions: {generateFirstTweet, toggleLike, toggleRetweet}}}>
            {children}
        </TweetContext.Provider>
    )
}