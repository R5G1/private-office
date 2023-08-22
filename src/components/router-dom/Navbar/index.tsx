import { NavLink } from 'react-router-dom';
import styles from '../Navbar/index.module.scss';
import img1 from './img/1.svg';
import img2 from './img/2.svg';
import img3 from './img/3.svg';
import img4 from './img/4.svg';
const Navbar = () => {
  function changeBg(prop: boolean) {
    const activeStyle = {
      background: 'var(--main-color-menu-m)',
      color: 'var(--main-color-d)',
    };
    const offActiveStyle = {
      background: 'var(--main-color-o)',
      color: 'var(--main-color-d)',
    };
    return prop ? activeStyle : offActiveStyle;
  }
  return (
    <div className={styles.navbar}>
      <NavLink className={styles.navbarLink} style={({ isActive }) => changeBg(isActive)} to="/">
        <img src={img1} alt="" />
      </NavLink>

      <NavLink
        className={styles.navbarLink}
        style={({ isActive }) => changeBg(isActive)}
        to="/betting"
      >
        <img src={img2} alt="" />
      </NavLink>
      <NavLink
        className={styles.navbarLink}
        style={({ isActive }) => changeBg(isActive)}
        to="/billings"
      >
        <img src={img3} alt="" />
      </NavLink>
      <NavLink
        className={styles.navbarLink}
        style={({ isActive }) => changeBg(isActive)}
        to="/control"
      >
        <img src={img4} alt="" />
      </NavLink>
    </div>
  );
};

export default Navbar;
