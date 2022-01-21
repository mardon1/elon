import React, { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';
import Carusel from '../carusel/Carusel';
import Products from '../products/Products';
import { Data, Productss } from '../Data';
import { Mulk } from '../Data';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Sidebar() {
  const [menu, setMenu] = useState(Productss);

  const headerRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <div className="sidebar">
      <Header></Header>
      <div className="container sidebar__container">
        <ul className="sidebar__list" ref={headerRef}>
          {Data.map((item, index) => {
            return (
              <div>
                <li
                  onClick={() => toggle(index)}
                  className={
                    clicked === index ? 'sidebar__item active' : 'sidebar__item'
                  }
                >
                  <div className="sidebar__item-group">
                    <div className="sidebar__icon">
                      <Icon icon={`${item.icon}`} />
                    </div>
                    <span
                      className={
                        clicked === index ? `sidebar__link` : 'sidebar__link'
                      }
                    >
                      {item.title}
                    </span>
                  </div>
                  <div className="sidebar__toggle-icon">
                    <Icon
                      icon={
                        clicked === index
                          ? 'akar-icons:chevron-up'
                          : 'akar-icons:chevron-down'
                      }
                    />
                  </div>
                  {clicked === index ? (
                    <ul className={'sub-menu'}>
                      {item.submenu.map((item, index) => {
                        return (
                          <div>
                            <li>
                              <Link to={`/${item.link1}`}>{item.title}</Link>
                              <span>{item.view}</span>
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              </div>
            );
          })}
        </ul>
        <div>
          <Carusel></Carusel>
          <div className="products__recommend">Tavsiya etilgan e’lonlar</div>
          <div className="product__cards">
            {Productss.slice(0, 20).map((item) => {
              return (
                <div>
                  <Link to={`/product/${item.id}`} className="product__card">
                    <img src={item.img} alt="" />
                    <Icon
                      className="product__icon-star"
                      icon="ant-design:star-filled"
                    />
                    <div className="product__date">
                      <p>
                        <span>
                          <Icon
                            className="product__icon"
                            icon="ant-design:calendar-outlined"
                          />
                        </span>
                        <span>{item.date}</span>
                      </p>
                      <p>
                        <span>
                          <Icon
                            className="product__icon"
                            icon="akar-icons:eye"
                          />
                        </span>
                        <span>{item.view}</span>
                      </p>
                    </div>
                    <div className="product__name">{item.name}</div>
                    <div className="product__price">
                      {item.price} {item.currency === 'UZS' ? 'UZS' : 'USD'}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="projects">
            <div className="projects__title">Loyihalar</div>
            <div className="projects__cards">
              <div className="projects__card">
                <img
                  src={require('../../img/project1.png')}
                  alt=""
                  className="project__img"
                />
                <div className="project__name">
                  Savdo markazi bitkazish sanasi: 2025 yil iyul
                </div>
                <div className="project__description">
                  Bozor yaqinida qurilayotgan binodan savdo o‘rinlari sotuvi
                  boshlanganini ma’lum qilamiz.
                </div>
                <div className="product__date">
                  <p>
                    <span>
                      <Icon
                        className="product__icon"
                        icon="ant-design:calendar-outlined"
                      />
                    </span>
                    <span>October 30, 2021</span>
                  </p>
                  <p>
                    <span>
                      <Icon className="product__icon" icon="akar-icons:eye" />
                    </span>
                    <span>856</span>
                  </p>
                </div>
              </div>
              <div className="projects__card">
                <img
                  src={require('../../img/project2.png')}
                  alt=""
                  className="project__img"
                />
                <div className="project__name">
                  Ko‘p qavatli uy bitkazib berish sanasi: 2023 yil mart
                </div>
                <div className="project__description">
                  Shahar markazida joylashgan ko’p qavatli binodan uy olishni
                  istaysizmi? Biz sotishni boshladik ulgurib qoling!
                </div>
                <div className="product__date">
                  <p>
                    <span>
                      <Icon
                        className="product__icon"
                        icon="ant-design:calendar-outlined"
                      />
                    </span>
                    <span>October 19, 2021</span>
                  </p>
                  <p>
                    <span>
                      <Icon className="product__icon" icon="akar-icons:eye" />
                    </span>
                    <span>976</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Sidebar;
