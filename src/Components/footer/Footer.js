import React from 'react';
import './footer.css';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer__container">
            <ul className="footer__list">
              <li className="footer__title">Corporate</li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  About us
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Human Resources
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  News
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__title">Our Services</li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Doping
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Secure Trade
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Secure e-Trade (SeT)
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Bulk Product Upload
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Advertising
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Sahibiddin Native Ad
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Mobile
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__title">Stores</li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Why Should I Open a Store
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Open Store
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__title">Privacy and Use</li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Doping
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Secure Trade
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Secure e-Trade (SeT)
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Bulk Product Upload
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Advertising
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Sahibiddin Native Ad
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Mobile
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__title">Follow Us</li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Facebook
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Twitter
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Linkedin
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Instagram
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__contacts">
            <div className="footer__contact">
              <div className="footer__icon">
                <Icon icon="fluent:call-24-regular" />
              </div>
              <div className="footer__group">
                <span>Call centr</span>
                <a href="tel:+998904440022">998 90 444 00 22</a>
              </div>
            </div>
            <div className="footer__email">
              <div className="footer__icon">
                <Icon icon="carbon:email" />
              </div>
              <div className="footer__group">
                <span>Help centr</span>
                <a href="mailto:elon@gmail.com">elon@gmail.com</a>
              </div>
            </div>
            <div className="footer__lang">
              <select>
                <option>English</option>
                <option>Uzb</option>
                <option>Rus tili</option>
              </select>
            </div>
          </div>
          <div className="copyright-text">Copyright © 2000-2021 e’lon.uz</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
