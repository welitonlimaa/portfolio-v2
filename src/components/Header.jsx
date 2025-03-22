import menu from '../assets/data/menu.json';
import menuicon from '../assets/imgs/svg/ham-menu.svg';
import menucloseicon from '../assets/imgs/svg/ham-menu-close.svg';
import { useState } from 'react';

function Header() {
  const [mobile, setMobile] = useState('');
  const [hamMenuStyle, setHamMenuStyle] = useState('');
  const [isClose, setIsClose] = useState(true);

  const hamMenuBtn = () => {
    if (mobile.includes('header__sm-menu--active')) {
      setMobile('');
      setHamMenuStyle('');
    } else {
      setMobile('header__sm-menu--active');
      setHamMenuStyle('ham-menu_style');
    }

    setIsClose(!isClose);
  };

  const headerSmallMenuLinks = () => {
    setMobile('');
    setHamMenuStyle('');
    setIsClose(true);
  };

  return (
    <header className={`header ${hamMenuStyle}`}>
      <div className="header__content">
        <div className="header__main">
          <ul className="header__links">
            {
              menu.map((data, index) => {
                return (
                  <li key={index} className="header__link-wrapper">
                    <a href={data.href} className="header__link"> {data.text} </a>
                  </li>
                )
              })
            }
          </ul>
          <button
            type="button"
            className="header__main-ham-menu-cont"
            onClick={hamMenuBtn}
          >
            <img
              src={isClose ? menuicon : menucloseicon}
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
          </button>
        </div>
      </div>
      <div className={`header__sm-menu ${mobile}`}>
        <div>
          <ul>
          {
              menu.map((data, index) => {
                return (
                  <button
                    key={index}
                    className="header__sm-menu-link"
                    onClick={headerSmallMenuLinks}
                  >
                    <a href={data.href} className="header__link"> {data.text} </a>
                  </button>
                )
              })
            }
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;