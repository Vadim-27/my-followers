import { useState } from "react";
import items from "./items";

const TweetsFilter = ({ setCategory }) => {
  const [isListOpen, setIsListOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    console.log('selectedCategory', selectedCategory);
    const handleClick = value => {
      console.log('value', value);
      setCategory(value);
       setSelectedCategory(value);
       setIsListOpen(false);
  };

  const toggleOpen = () => {
    setIsListOpen(!isListOpen);
  };

  const element = items.map(({ value, text, id }) => (
    <li
      key={id}
      onClick={() => {
        setIsListOpen(false);
        handleClick(value);
      }}
    >
      {text}
    </li>
  ));
  return (
    <div>
      <button onClick={toggleOpen}>Category</button>
      {isListOpen && (
        <ul
        // style={{
        //   opacity: isOpen ? 1 : 0,
        //   transform: isOpen ? "translateY(0)" : "translateY(-100%)",
        //   transition: " transform 0.3s ease",
        // }}
        >
          {element}
        </ul>
      )}
      
    </div>
  );
};
export default TweetsFilter;