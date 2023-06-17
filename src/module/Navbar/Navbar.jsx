
import { NavLink } from 'react-router-dom';

import items from './items';

const Navbar = () => {
    const elements = items.map(({ id, text, link }) => (
       
        <li key={id}>
            <NavLink to={link}>{ text}</NavLink>
            </li>
        
    ))

    return (
      <div>
        <ul>{elements}</ul>
      </div>
    );
}

export default Navbar;