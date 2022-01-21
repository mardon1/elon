import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import './ad.css';
import { Data } from '../Data';
import Header1 from '../header1/Header1';

const submenu = Data.map((item) => item.submenu);

function Ad() {
  return (
    <div>
      <Header1></Header1>
      <div className="category">
        <div className="container">
          <h2 className="category__name">Kategoriya</h2>
          <ul className="category__list">
            {Data.map((item) => {
              return (
                <Link to={`/category/${item.title}`} className="category__item">
                  <div className="category__icon">
                    <Icon className="icon" icon={`${item.icon}`} />
                  </div>
                  <span className="category__link" href="#">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ad;
