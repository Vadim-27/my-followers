import { NavLink } from "react-router-dom";

import items from "./items";
import css from './tweetsFilter.module.scss'

const TweetsFilter = ({ toggleOpen, handleClick, isListOpen }) => {


  const element = items.map(({ value, text, id }) => (
    <li
      key={id}
      onClick={() => {
      
        handleClick(value);
      }}
    >
      <button
        className={css.btnCategoryItem}

        
      >
        {text}
      </button>
    </li>
  ));
  return (
    <div className={css.wrapperList}>
      <NavLink to="/">
        <button className={css.btnCategory}>Back</button>
      </NavLink>
      {isListOpen && (
        <ul
          className={css.btnCategoryList}
      
        >
          {element}
        </ul>
      )}
      <button className={css.btnCategory} onClick={toggleOpen}>
        Category
      </button>
    </div>
  );
};
export default TweetsFilter;