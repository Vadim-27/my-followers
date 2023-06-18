import { NavLink } from "react-router-dom";
// import { useState } from "react";
import items from "./items";
import css from './tweetsFilter.module.scss'

const TweetsFilter = ({ toggleOpen, handleClick, isListOpen }) => {
  // const [isListOpen, setIsListOpen] = useState(false);
  //   const [selectedCategory, setSelectedCategory] = useState(null);
  //   console.log('selectedCategory', selectedCategory);
  //   const handleClick = value => {
  //     console.log('value', value);
  //     setCategory(value);
  //      setSelectedCategory(value);
  //      setIsListOpen(false);
  // };

  // const toggleOpen = () => {
  //   setIsListOpen(!isListOpen);
  // };

  const element = items.map(({ value, text, id }) => (
    <li
      key={id}
      onClick={() => {
        // setIsListOpen(false);
        handleClick(value);
      }}
    >
      <button
        className={css.btnCategoryItem}

        // onClick={() => handleFilterClick(value)}
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
          // style={{
          //   opacity: isOpen ? 1 : 0,
          //   transform: isOpen ? "translateY(0)" : "translateY(-100%)",
          //   transition: " transform 0.3s ease",
          // }}
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