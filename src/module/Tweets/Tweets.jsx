import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getAllUsers } from "redux/users/users-operation";
import { getCards } from "redux/users/users-selectors";

import TweetsFilter from "./TweetsFilter/TweetsFilter";
import TweetsList from "./TweetsList/TweetsList";

const Tweets = () => {
const cards = useSelector(getCards);
    // const [category, setCategory] = useState(null);
    //   const [followersCount, setFollowersCount] = useState(0);
    //   const [isFollowing, setIsFollowing] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllUsers());
    }, [dispatch]);





    return (
      <>
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
        <TweetsFilter />
        <TweetsList
          cards={cards}
        //   handleFollowClick={() => handleFollowClick()}
        //   isFollowing={isFollowing}
        />
      </>
    );
}
export default Tweets;