import React from 'react';
import './header1.css';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Header1() {
  return (
    <div>
      <nav className="nav">
        <div className="container nav__container">
          <div className="nav-group">
            <Link to="/" className="nav__logo">
              Elon.uz
            </Link>
            <div className="nav__account">
              <span>
                <Icon icon="bx:bx-user" />
              </span>
              <span>Ixtiyorjon Xakimov</span>
              <span>
                <Icon icon="akar-icons:chevron-down" />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header1;
