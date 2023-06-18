import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

import { getAllUsers } from "redux/users/users-operation";
import { getCards } from "redux/users/users-selectors";

import TweetsFilter from "./TweetsFilter/TweetsFilter";
import TweetsList from "./TweetsList/TweetsList";
// import { getFoll } from "redux/users/users-selectors";
import css from './tweets.module.scss'

const Tweets = () => {
  // const cards = useSelector(getCards);
  const allCards = useSelector(getCards);
  const [isLimit, setLimit] = useState(3);
  //  const follow = useSelector(getFoll);
  // const [category, setCategory] = useState(null);
  //   const [followersCount, setFollowersCount] = useState(0);
  //   const [isFollowing, setIsFollowing] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers(isLimit));
  }, [dispatch, isLimit]);

  const [isListOpen, setIsListOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    console.log('selectedCategory', selectedCategory);
    const handleClick = value => {
      console.log('value', value);
      // setCategory(value);
       setSelectedCategory(value);
       setIsListOpen(false);
  };

  const toggleOpen = () => {
    setIsListOpen(!isListOpen);
  };

//   const [copyCards, setCopyCards] = useState(allCards);
// console.log('copyCards', copyCards);
//    if (selectedCategory === true) {
//      setCopyCards(allCards.filter(card => !follow.includes(card.id)));
//    } else if (selectedCategory === false) {
//      setCopyCards (allCards.filter(card => follow.includes(card.id)));
//    }

  return (
    <>
      <TweetsFilter
        handleClick={handleClick}
        toggleOpen={toggleOpen}
        isListOpen={isListOpen}
      />
      <TweetsList cards={allCards} />
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