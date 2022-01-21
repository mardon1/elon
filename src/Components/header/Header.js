import React, { useContext } from 'react';
import './header.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext';

function Header() {
  // const msg = useContext(UserContext);
  return (
    <div>
      <nav>
        <div className="container nav__container">
          <div className="nav-group">
            <Link to="/" className="nav__logo" href="#">
              Elon.uz
            </Link>

            <div className="input-group">
              <input
                type="text"
                placeholder="O‘zingizga kerakli e’lonni qidiring"
              />
              <Icon className="search-icon" icon="bx:bx-search" />
            </div>
          </div>
          <div className="nav-group">
            <ul className="nav-icons">
              <li className="user__icon">
                <Icon className="nav-icon" icon="bx:bx-user" />
                {/* <div className="user">
                  <div className="user__wrapperr">
                    <div className="user-icon">
                      <Icon icon="el:user" />
                    </div>
                    <div className="user-info">
                      <span>Ixtiyorjon Xakimov</span>
                      <span>ixtiyorjonxakimmov</span>
                    </div>
                  </div>
                  <ul className="user-accaount">
                    <li>
                      <Icon
                        className="user-account-icon"
                        icon="fa-solid:user"
                      />
                      <span>Mening hisobim</span>
                    </li>
                    <li>
                      <Icon
                        className="user-account-icon exit"
                        icon="system-uicons:exit-right"
                      />
                      <span>Tizimdan chiqish</span>
                    </li>
                  </ul>
                </div> */}
              </li>
              <li>
                <Icon className="nav-icon" icon="ci:mail" />
              </li>
              <li>
                <Icon className="nav-icon" icon="feather:bell" />
              </li>
              <li to="/favourites">
                <Icon className="nav-icon" icon="bi:star" />
              </li>
            </ul>
            <Link to="/category" className="nav-ads">
              E'lon berish
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
