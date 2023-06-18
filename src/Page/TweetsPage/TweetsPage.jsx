
import Tweets from "module/Tweets/Tweets";
import css from './tweetsPage.module.scss'
const TweetsPage = () => {
    return (
      <div className={css.wrapperPage}>
        <Tweets />
      </div>
    );
}
export default TweetsPage;