import React from 'react';
import { useState } from 'react';
import { Link, Switch, useParams } from 'react-router-dom';
import { Data } from '../../Components/Data';
import { Icon } from '@iconify/react';
import { Productss } from '../../Components/Data';
import ProductCard from '../products/Products';
import Header from '../header/Header';
import './product.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { YMaps, Map, Placemark, FullscreenControl } from 'react-yandex-maps';
import { Controller, Zoom } from 'swiper';
import Footer from '../footer/Footer';
import Modal from '../modal/Modal';

export const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

function Product() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };
  const [click, setClick] = useState(false);
  const [map, setMap] = useState(true);
  const [message, setMessage] = useState(false);
  const [info, setInfo] = useState(false);
  const clickMap = () => {
    setMap(true);
    setMessage(false);
    setInfo(false);
  };
  const clickMessage = () => {
    setMap(false);
    setMessage(true);
    setInfo(false);
  };
  const clickInfo = () => {
    setMap(false);
    setMessage(false);
    setInfo(true);
  };
  return (
    <div>
      <Header></Header>
      {Productss.filter((item) => item.id === id).map((product) => {
        return (
          <div>
            <div className="product">
              <div className="container">
                <Modal
                  showModal={showModal}
                  setShowModal={setShowModal}
                ></Modal>

                <Link to={`${product.link}`} className="cat__title">
                  <span>
                    <Icon icon="eva:arrow-ios-back-outline" />
                  </span>
                  <span>Ortga</span>
                </Link>
                <div className="product__container">
                  <div className="main">
                    <img
                      className="product__banner"
                      src={click ? product.img1 : product.mainImg}
                      alt=""
                    />

                    <div className="secondary__img">
                      <img src={product.img1} alt="" />
                      <img src={product.img2} alt="" />
                      <img src={product.img3} alt="" />
                      <img src={product.img4} alt="" />
                    </div>
                    <div className="product__info1">
                      <h2 className="product__title">
                        Tog`da joylashgan uy oilaviy dam olish uchun ijaraga
                        beriladi
                      </h2>
                      <div className="product__date">
                        <p>
                          <span>
                            <Icon
                              className="product__icon"
                              icon="ant-design:calendar-outlined"
                            />
                          </span>
                          <span>{product.date}</span>
                        </p>
                        <p>
                          <span>
                            <Icon
                              className="product__icon"
                              icon="akar-icons:eye"
                            />
                          </span>
                          <span>{product.view}</span>
                        </p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          borderBottom: '1px solid #DBDDE3',
                          marginBottom: '48px',
                        }}
                      >
                        <div className="product__price">
                          <Icon
                            className="wallet-icon"
                            icon="teenyicons:wallet-outline"
                          />
                          <span>
                            {product.price}
                            {product.currency === 'UZS' ? 'UZS' : 'USD'}
                          </span>
                        </div>
                        <div className="product__favourite">
                          <Icon
                            className="favourite-icon"
                            icon="ant-design:star-filled"
                          />
                          <span>Sevimlilarga qo`shish</span>
                        </div>
                      </div>
                    </div>
                    <div className="additional__section">
                      <div className="additional__btns">
                        <span
                          className={
                            map ? 'additional__btn active' : 'additional__btn'
                          }
                          onClick={clickMap}
                        >
                          Manzil
                        </span>
                        <span
                          className={
                            message
                              ? 'additional__btn active'
                              : 'additional__btn'
                          }
                          onClick={clickMessage}
                        >
                          Xabar yozing
                        </span>
                        <span
                          className={
                            info ? 'additional__btn active' : 'additional__btn'
                          }
                          onClick={clickInfo}
                        >
                          Malumotlar
                        </span>
                      </div>
                      <div className={map ? 'location active' : 'location'}>
                        <YMaps>
                          <div style={{ width: '100%' }}>
                            <Map
                              width={'100%'}
                              height={'367px'}
                              // modules={}
                              con
                              defaultState={{
                                center: [41.311158, 69.279737],
                                zoom: 5,
                              }}
                            >
                              <Placemark
                                geometry={[41.311158, 69.279737]}
                              ></Placemark>
                              <FullscreenControl
                                options={{ float: 'right' }}
                              ></FullscreenControl>
                            </Map>
                          </div>
                        </YMaps>
                      </div>
                      <div className={message ? 'message active' : 'message'}>
                        <textarea placeholder="Xabar yozing"></textarea>
                      </div>
                      <div
                        className={info ? 'information active' : 'information'}
                      >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Asperiores vitae sequi qui est quidem culpa ea
                        repudiandae exercitationem voluptatem voluptas quaerat,
                        amet laboriosam officia reiciendis natus impedit. Nisi
                        tempore labore suscipit voluptatem consequatur eum quia
                        fugit, molestiae recusandae quibusdam hic illo numquam!
                        Iure quo, enim eos a velit molestiae optio maxime
                        praesentium accusamus, ipsum voluptates? Quis, dolore.
                        Optio numquam assumenda tempora ex officia dolore
                        quaerat perferendis culpa dolores temporibus! Reiciendis
                        ab molestias cum laudantium. Voluptatibus nam quaerat,
                        corporis sint dicta sed dolorum dignissimos? Impedit,
                        odit aut. Voluptatibus beatae necessitatibus temporibus
                        quae aut, quasi consequatur consequuntur expedita.
                        Blanditiis quo magnam doloremque dignissimos nam iusto
                        fugiat assumenda reprehenderit a laborum. Explicabo
                        nobis autem voluptatem minus similique tempora natus,
                        quod modi neque illo corporis quisquam amet nulla
                        numquam, nesciunt praesentium nihil pariatur adipisci
                        delectus aperiam quos tempore veniam. Ipsam id quasi
                        maiores cumque dignissimos impedit neque fuga? Ab
                        necessitatibus aliquam suscipit? Impedit rem sapiente
                        obcaecati ea quidem sed doloribus voluptatum cum
                        quaerat, similique voluptatem neque minus a inventore,
                        cumque nemo error ex aliquam id. Animi molestias itaque
                        sint nulla corrupti veniam rerum tempore blanditiis
                        earum, amet, porro maiores veritatis minus! Animi
                        accusantium incidunt non, qui reprehenderit consequatur
                        sit soluta ut aliquam totam illum!
                      </div>
                    </div>
                    <div className="releted__ads">
                      <h2>O`xshash elonlar</h2>
                      <div className="product__cards">
                        {Productss.slice(0, 8).map((item) => {
                          // console.log(product.category1);
                          // console.log(item.category1);
                          // if (product.link === item.link)
                          return (
                            <div>
                              <Link
                                to={`/product/${item.id}`}
                                className="product__card"
                              >
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
                                  {item.price}{' '}
                                  {item.currency === 'UZS' ? 'UZS' : 'USD'}
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="product__description">
                    <div className="contact">
                      <div className="name">Davron Yo`lashev</div>
                      <span>Membership Date April 2012</span>
                      <div className="calls">
                        <a href="tel:998904420022" className="call">
                          <Icon icon="fluent:call-24-regular" />
                        </a>
                        <button className="message">Messages</button>
                      </div>
                    </div>
                    <div className="product__info">
                      <ul className="product__info-list">
                        <li className="product__info-item">
                          <span>ID</span>
                          <span>{product.id}</span>
                        </li>
                        <li className="product__info-item">
                          <span>Xonalar soni</span>
                          <span>{product.rooms}</span>
                        </li>
                        <li className="product__info-item">
                          <span>Umumiy maydoni</span>
                          <span>{product.area}</span>
                        </li>
                        <li className="product__info-item">
                          <span>Ta’miri</span>
                          <span>{product.id}</span>
                        </li>
                        <li className="product__info-item">
                          <span>Uy turi</span>
                          <span>{product.type}</span>
                        </li>
                        <li className="product__info-item">
                          <span>Devor turi</span>
                          <span>{product.id}</span>
                        </li>
                        <li className="product__info-item">
                          <span>Sanuzel</span>
                          <span>{product.id}</span>
                        </li>
                        <li className="product__info-item">
                          <span>Vositachilik haqqi</span>
                          <span>{product.isMediator}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="product__info">
                      <div className="title">{product.category1}da bor</div>
                      <div className="description">
                        Kir yuvish mashinasi, Muzlatkich, Oshxona, Televizor,
                        Balkon, Konditsioner, Internet, Kabelli TV, Telefon
                      </div>
                      <div className="title">Yaqinida joylashgan</div>
                      <div className="description">
                        Restoran, kafelar, bolalar og’chasi turargoh, Bekatlar,
                        Supermarket, do’konlar, Park, yashil zona,, Kasalxona,
                        Maktab, bolalar maydonchasi
                      </div>
                    </div>
                    <div className="product__info last-child">
                      <div className="title">Tavsifi</div>
                      <div className="description">
                        Shanba Yakshanba kunlari 4 500 000 so’m Chorvog’ bochka
                        Tog’ yon bag’rida XAY TEK uslubida qurilgan dacha 2 km 5
                        ta yotoqxona 1 bolalar yotoqxonasi, qishki basseyn 10/5,
                        yozgi basseyn 14/7 tennis, bilyart, Playstation 3,
                        Turetskiy va Ruskiy Hammom, Qo’shimcha Oshpaz va
                        xizmatchilar ham bor
                      </div>
                      <div className="complain-btn">
                        <Icon
                          className="complaint-icon"
                          icon="akar-icons:flag"
                        />
                        <a onClick={openModal} href="#">
                          Shikoyat qilish
                        </a>
                      </div>
                    </div>
                    <div className="product__info">
                      <div className="title">Xavfsizlik maslahatlari</div>
                      <div
                        className="description"
                        style={{ marginBottom: '40px' }}
                      >
                        Sizni qiziqtirgan maxsulotni ko’rmasdan oldin depozit
                        yoki pul yubormang!
                      </div>
                      <div className="description">
                        <a href="#" style={{ textDecoration: 'none' }}>
                          Batafsil
                        </a>
                        malumot uchun bosing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Footer></Footer>
    </div>
  );
}

export default Product;
