import logo from '@/assets/logo.png'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import menuIcon from '@/assets/images/menuIcons/menu.svg';
const cx = classNames.bind(styles)

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('right-menu')}>
          <div className={cx('logo')}>
            <button className={cx('iconMenu')} onClick={toggleMenu}>
              <img src={menuIcon} alt='menu' className={cx('iconMenu')}/>
            </button>
            <img src={logo} alt='logo' className={cx('logoImg')}></img>
          </div>
          <ul className={cx('menu', { 'menu-mobile': isMenuOpen })}>
            <li><a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} className={cx('findIcon')}/></a></li>
            <li><a href="/">HOME</a></li>
            <li><a href="/game">GAME</a></li>
            <li><a href="/info">INFOR</a></li>
            <li><a href="/news">NEWS</a></li>
            <li><a href="/promotions">PROMOTIONS</a></li>
            <li><a href="/vip">VIP</a></li>
          </ul>
        </div>
        <div className={cx('left-menu')}>
          <button className={cx('action')}>
            LOGIN
          </button>
          <button className={cx('action')}>
            REGISTRATION
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header