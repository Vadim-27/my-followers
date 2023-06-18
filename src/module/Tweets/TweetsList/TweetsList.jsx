// import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { pushFollower, updUserFollowing } from 'redux/users/users-operation';
import { getFoll } from 'redux/users/users-selectors';


import { SvgSelector } from 'utils/SvgSelector';
// import items from "./items";
import css from './tweets.module.scss';
const TweetsList = ({ cards }) => {
  // const [isFollow, setFollow] = useState();
  const dispatch = useDispatch();
  const follow = useSelector(getFoll);

  console.log('foll', follow);

  const handleFollowClick = (id, followers) => {
    dispatch(pushFollower(id));
    const result = follow.includes(id);
    if (result) {
      followers = followers - 1;
      dispatch(updUserFollowing({ id, followers }));
    } else if (!result) {
      followers = followers + 1;
      dispatch(updUserFollowing({ id, followers }));
    }
  };

  const tweet = cards.map(({ id, user, tweets, followers, avatar }) => (
    <li className={css.wrapperItem} key={id}>
      <div className={css.logo}>
        <SvgSelector id="logoGoIt" />
      </div>
      <div className={css.wrapperAvatar}>
        <img alt="avatar" className={css.avatar} src={avatar} />
        {/* <p className={css.avatar}>{avatar}</p> */}
      </div>
      <p className={css.tweets}>{tweets} TWEETS</p>
      <p className={css.followers}>
        {followers.toLocaleString('en-US', { useGrouping: true })} FOLLOWERS
      </p>
      <button
        type="button"
        className={css.followingBtn}
        onClick={() => handleFollowClick(id, followers)}
        style={{ backgroundColor: follow.includes(id) ? '#5CD3A8' : '' }}
      >
        {follow.includes(id) ? 'Following' : 'Follow'}
      </button>
    </li>
  ));
  return (
    <div>
      <ul className={css.wrapperList}>{tweet}</ul>
     
    </div>
  );
};
export default TweetsList;
