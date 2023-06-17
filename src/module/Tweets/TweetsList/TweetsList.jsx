
import { useState } from "react";
import { SvgSelector } from "utils/SvgSelector";
// import items from "./items";
import css from './tweets.module.scss'
const TweetsList = ({ cards }) => {
    // const [followersCount, setFollowersCount] = useState(0);
    const [isFollowing, setIsFollowing] = useState();
    console.log('isFollowing', isFollowing);
  const handleFollowClick = (id) => {
    setIsFollowing(!isFollowing);
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
      <button type="button" className={css.followingBtn} onClick={() => handleFollowClick(id)}>
        {isFollowing ? 'Following' : 'Follow'}
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