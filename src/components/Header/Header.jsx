import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ options }) => {
  return (
    <header className={styles.header}>
      {options.map(name => {
        return (
          <NavLink
            to={`/${name === 'Home' ? '' : name.toLowerCase()}`}
            // className={`${styles.link}`}
            className={({ isActive }) => {
              return isActive
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`;
            }}
            key={name}
          >
            {name}
          </NavLink>
        );
      })}
    </header>
  );
};

export default Header;
