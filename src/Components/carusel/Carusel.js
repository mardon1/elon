import React from 'react';
import { Icon } from '@iconify/react';
import './carusel.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const handleDragStart = (e) => e.preventDefault();

function Carusel() {
  const items = [
    <img
      src={require('../../img/banner.png')}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={require('../../img/banner1.png')}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={require('../../img/banner2.png')}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];
  return (
    <main>
      <div className="main__search">
        <input type="text" placeholder="Qidiruv" />
        <Icon className="search__icon" icon="feather:x" />
        <button>Qidiruv</button>
      </div>

      <div className="main__slide">
        <AliceCarousel
          infinite={true}
          autoPlay={true}
          autoPlayInterval={3000}
          disableButtonsControls={true}
          mouseTracking
          items={items}
        />
      </div>
    </main>
  );
}

export default Carusel;
