import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

import { getAllUsers } from "redux/users/users-operation";
import { getCards } from "redux/users/users-selectors";

import TweetsFilter from "./TweetsFilter/TweetsFilter";
import TweetsList from "./TweetsList/TweetsList";
import { getFoll } from "redux/users/users-selectors";
import css from './tweets.module.scss'

const Tweets = () => {
 
  const allCards = useSelector(getCards);

  const [isLimit, setLimit] = useState(3);
  const follow = useSelector(getFoll);
   const [copyCards, setCopyCards] = useState([]);
   console.log('copyCards', copyCards);
 
  
  useEffect(() => {
    setCopyCards(allCards);
  }, [allCards]);
  const [isListOpen, setIsListOpen] = useState(false);
    
    const handleClick = value => {
     
      setIsListOpen(false);
       if (value === 'following=false') {
         setCopyCards(allCards.filter(card => !follow.includes(card.id)));
       } else if (value === 'following=true') {
         setCopyCards(allCards.filter(card => follow.includes(card.id)));
       } else if (value === '/') {
         setCopyCards(allCards);
       } 
  };
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllUsers(isLimit));
    }, [dispatch, isLimit]);

  const toggleOpen = () => {
    setIsListOpen(!isListOpen);
  };

 
  

  return (
    <>
      <TweetsFilter
        handleClick={handleClick}
        toggleOpen={toggleOpen}
        isListOpen={isListOpen}
      />
      <TweetsList cards={copyCards} />
      <button
        className={css.btnLoad}
        type="button"
        onClick={() => {
          setLimit(prevLimit => prevLimit + 3);
        }}
      >
        Load more
      </button>
    </>
  );
}
export default Tweets;