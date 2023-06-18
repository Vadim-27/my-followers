
import { NavLink } from 'react-router-dom';

import items from './items';
import css from './navbar.module.scss'

const Navbar = () => {
    const elements = items.map(({ id, text, link }) => (
      <li key={id}>
        <NavLink className={css.navLink} to={link}>
          {text}
        </NavLink>
      </li>
    ));

    return (
      <div>
        <ul className={css.wrapperHeder}>{elements}</ul>
      </div>
    );
}

export default Navbar;