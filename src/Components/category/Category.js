import React from 'react';
import { Data } from '../../Components/Data';
import { Link, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Header1 from '../header1/Header1';
import './category.css';

function Categoriya() {
  const { title } = useParams();
  return (
    <div>
      <Header1></Header1>
      {Data.filter((card) => card.title === title).map((item) => {
        return (
          <div>
            <div className="category">
              <div className="container">
                <Link to="/category" className="cat__title">
                  <span>
                    <Icon icon="eva:arrow-ios-back-outline" />
                  </span>
                  <span>Ortga</span>
                </Link>
                <ul className="cat__list">
                  {item.submenu.map((itemm) => {
                    return (
                      <div>
                        <li className="cat__item">
                          {itemm.title}
                          {itemm.title === itemm.category ? (
                            <ul className="sub">
                              {itemm.optionForTime2 ? (
                                <li className="cat__item1">
                                  {itemm.optionForTime2}
                                  <ul className="sub2">
                                    <li>
                                      <div className="checked__group">
                                        <div className="checked__icon">
                                          <Icon
                                            className="check__icon"
                                            icon="akar-icons:check"
                                          />
                                        </div>
                                        <div className="sub2__btn">
                                          Kategoriya tanlash yakunlandi
                                        </div>
                                        <Link
                                          className="next-btn"
                                          to={`/categ/${itemm.title}`}
                                        >
                                          Davom etish
                                        </Link>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              ) : null}
                              {itemm.optionForTime3 ? (
                                <li className="cat__item1">
                                  {itemm.optionForTime3}
                                  <ul className="sub2">
                                    <div className="checked__group">
                                      <div className="checked__icon">
                                        <Icon
                                          className="check__icon"
                                          icon="akar-icons:check"
                                        />
                                      </div>
                                      <div className="sub2__btn">
                                        Kategoriya tanlash yakunlandi
                                      </div>
                                      <Link
                                        className="next-btn"
                                        to={`/categ/${itemm.title}`}
                                      >
                                        Davom etish
                                      </Link>
                                    </div>
                                  </ul>
                                </li>
                              ) : null}
                              {itemm.optionForTime4 ? (
                                <li className="cat__item1">
                                  {itemm.optionForTime4}
                                  <ul className="sub2">
                                    <div className="checked__group">
                                      <div className="checked__icon">
                                        <Icon
                                          className="check__icon"
                                          icon="akar-icons:check"
                                        />
                                      </div>
                                      <div className="sub2__btn">
                                        Kategoriya tanlash yakunlandi
                                      </div>
                                      <Link
                                        className="next-btn"
                                        to={`/categ/${itemm.title}`}
                                      >
                                        Davom etish
                                      </Link>
                                    </div>
                                  </ul>
                                </li>
                              ) : null}
                              {itemm.optionForTime5 ? (
                                <li className="cat__item1">
                                  {itemm.optionForTime5}
                                  <ul className="sub2">
                                    <div className="checked__group">
                                      <div className="checked__icon">
                                        <Icon
                                          className="check__icon"
                                          icon="akar-icons:check"
                                        />
                                      </div>
                                      <div className="sub2__btn">
                                        Kategoriya tanlash yakunlandi
                                      </div>
                                      <Link
                                        className="next-btn"
                                        to={`/categ/${itemm.title}`}
                                      >
                                        Davom etish
                                      </Link>
                                    </div>
                                  </ul>
                                </li>
                              ) : null}
                            </ul>
                          ) : null}
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Categoriya;
