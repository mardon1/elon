import React from 'react';
import { Link, Switch, useParams } from 'react-router-dom';
import { Data } from '../../Components/Data';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Icon } from '@iconify/react';
import ImageUploader from 'react-images-upload';
import Header1 from '../header1/Header1';
import SwitchBtn from '../togglebutton/Switch';
import { ImgUpload } from '../../Components/Data';
import './announcement.css';
import { useState } from 'react';

function Announcement() {
  const { category } = useParams();
  const [character, setCharacter] = useState(ImgUpload);
  const [value, setValue] = useState('');
  const [textarea, setTextarea] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const submitBtn = () => {
    if (
      value === '' &&
      textarea === '' &&
      price === '' &&
      location === '' &&
      email === '' &&
      phone === ''
    ) {
      alert(
        'Iltimos mahsulot sarlavhasini, tavisfini, narxini, yashash manzilingizni, emailingizni, telefon raqamingizni kiriting'
      );
    } else if (
      value &&
      textarea === '' &&
      price === '' &&
      location === '' &&
      email === '' &&
      phone === ''
    ) {
      alert(
        'Iltimos mahsulot, tavisfini, narxini, yashash manzilingizni, emailingizni, telefon raqamingizni kiriting'
      );
    } else if (
      value &&
      textarea &&
      price === '' &&
      location === '' &&
      email === '' &&
      phone === ''
    ) {
      alert(
        'Iltimos mahsulot narxini, yashash manzilingizni, emailingizni, telefon raqamingizni kiriting'
      );
    } else if (
      value &&
      textarea &&
      price &&
      location === '' &&
      email === '' &&
      phone === ''
    ) {
      alert(
        'Iltimos  yashash manzilingizni, emailingizni, telefon raqamingizni kiriting'
      );
    } else if (
      value &&
      textarea &&
      price &&
      location &&
      email === '' &&
      phone === ''
    ) {
      alert('Iltimos   emailingizni, telefon raqamingizni kiriting');
    } else if (
      value &&
      textarea &&
      price &&
      location &&
      email &&
      phone === ''
    ) {
      alert('Iltimos telefon raqamingizni kiriting');
    } else if (value && textarea && price && location && email && phone) {
      alert('Iltimos telefon raqamingizni kiriting');
    }
  };
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const handleTextarea = (e) => {
    setTextarea(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPrice(e.target.value);
  };

  const handleOnDragEnd = (result) => {
    const items = Array.from(character);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCharacter(items);
    console.log(result);
  };

  return (
    <div>
      <Header1></Header1>
      {Data.map((item) => {
        return (
          <div>
            {item.submenu
              .filter((sub) => sub.title === category)
              .map((itemm) => {
                return (
                  <div className="anouncement">
                    <div className="container">
                      <h2 className="anouncement__title">Elon joylashtirish</h2>
                      <Link
                        to={`/category/${item.title}`}
                        className="cat__title"
                      >
                        <span>
                          <Icon icon="eva:arrow-ios-back-outline" />
                        </span>
                        <span>Ortga</span>
                      </Link>
                      <div className="announcement__titlee">
                        <div className="announcement__title-title">
                          Bizga e’loningiz haqida gapirib bering
                        </div>
                        <div className="announcement__title-input">
                          <label htmlFor="">birnima</label>
                          <input
                            onChange={handleValue}
                            value={value}
                            type="text"
                            placeholder="Misol uchun: 2 xonali uy sotiladi hamma hujjatlari joyida"
                          />
                          <span>Eng muhimi-bu sarlavha, unutmang</span>
                          <div className="important-icon"></div>
                          <div className="important-icon-title">
                            Xaridorlarni jalb qilish uchun aniq va qiziqarli
                            sarlavhani o’ylab ko’ring. Sarlavhada yozilmaydigan
                            bir nechta narsalar mavjud: bosh harflar, telefon
                            raqamlar, email va havolalar
                          </div>
                        </div>
                      </div>
                      <div className="announcement__img">
                        <div className="announcement__img-title">
                          Bizga e’loningiz haqida gapirib bering
                        </div>
                        <span>
                          Birinchi surat e’loningiz asosiy rasmi bo’ladi.
                          Suratlar tartibini ularning ustiga bosib va olib
                          o’tish bilan o’zgartirishingiz mumkin.
                        </span>
                        <div className="announcement__img-box">
                          Rasmlarni qo‘shish
                        </div>
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                          <Droppable droppableId="birnima">
                            {(provided) => {
                              return (
                                <div
                                  className="announcement__img-boxes"
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}
                                >
                                  {character.map((item, index) => {
                                    return (
                                      <Draggable
                                        draggableId={item.id}
                                        index={index}
                                      >
                                        {(provided) => {
                                          return (
                                            <div
                                              {...provided.draggableProps}
                                              ref={provided.innerRef}
                                              {...provided.dragHandleProps}
                                              style={{ marginRight: '15px' }}
                                            >
                                              <ImageUploader
                                                withIcon={false}
                                                withPreview={true}
                                                label=""
                                                buttonText="Upload Images"
                                                imgExtension={[
                                                  '.jpg',
                                                  '.gif',
                                                  '.png',
                                                  '.gif',
                                                  '.svg',
                                                ]}
                                                maxFileSize={1048576}
                                                fileSizeError=" file size is too big"
                                              />
                                            </div>
                                          );
                                        }}
                                      </Draggable>
                                    );
                                  })}
                                  {provided.placeholder}
                                </div>
                              );
                            }}
                          </Droppable>
                        </DragDropContext>
                      </div>
                      <div className="announcement__description">
                        <div className="announcement__description-title">
                          Tavsif
                        </div>
                        <div className="announcement__description-textarea">
                          <textarea
                            onChange={handleTextarea}
                            value={textarea}
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="O‘zingizni shu elonni ko‘rayotgan odam o‘rniga qo‘ying va tavsif yozing"
                          ></textarea>
                          <span className="important-text">
                            Tavsif 80 belgidan kam bo’lishi kerak emas
                          </span>
                          <span className="important-text2">
                            Yana kamida 80 ta belgi yozing
                          </span>
                          <div className="description-important-icon"></div>
                          <div className="description-important-icon-title">
                            Aniq yozing. Shunda xaridorlar kamroq
                            takrorlanadigan savollarni beradi. Ko‘proq
                            ma’lumotlarni qo‘shing. Xaridorlar sizning
                            e’loningizni osonroq topadilar. Rostini Yozing .
                            Xaridorlar to‘g‘ri taxminlarga ega bo‘lishladi va
                            sizga ijobiy baho berishadi.
                          </div>
                        </div>
                      </div>
                      <div className="anouncement__main">
                        <div className="anouncement__price">
                          <div className="price__title">Narx</div>
                          <div className="price__input">
                            <input
                              type="text"
                              onChange={handlePrice}
                              value={price}
                            />
                            <select>
                              <option>so‘m</option>
                              <option>dollar</option>
                            </select>
                          </div>
                          <span className="important-text">
                            Majburiy maydon
                          </span>
                          <div className="price__agreement">
                            <span>Kelishuv asosida</span>
                            <SwitchBtn></SwitchBtn>
                          </div>
                        </div>
                        <div className="additional__info">
                          <div className="additional__title">
                            Qo‘shimcha ma’lumot
                          </div>
                          <div className="additional__input-group">
                            <div className="additional__input">
                              <label htmlFor="">Xonalar soni</label>
                              <input type="text" />
                            </div>
                            <div className="additional__input">
                              <label htmlFor="">Umumiy maydon</label>
                              <input type="text" />
                            </div>
                            <div className="additional__input">
                              <label htmlFor="">Yashash maydoni</label>
                              <input type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="checed-group">
                          <div className="location__title">Joylashuvi</div>
                          <div className="checkbox-container">
                            <div className="checkbox-group">
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Shaharda</span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Shaharda atrofida
                                </span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Qishloq joylari
                                </span>
                              </label>
                            </div>
                            <div className="checkbox-group">
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Trassa chetida
                                </span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Suv havzasi, daryo yaqinida
                                </span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Tog’ etagida</span>
                              </label>
                            </div>
                            <div className="checkbox-group">
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Dalahovli hududida
                                </span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Yopiq hududda</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="additional__info">
                          <div className="additional__input-group">
                            <div className="additional__input">
                              <label htmlFor="">Uy qavatligi</label>
                              <input placeholder="2" type="text" />
                            </div>
                            <div className="additional__input">
                              <label htmlFor="">Shiftning balandligi</label>
                              <input type="text" />
                            </div>
                            <div className="additional__input">
                              <label htmlFor="">Uchastka maydoni </label>
                              <input className="last-child" type="text" />
                            </div>
                          </div>
                        </div>

                        <div className="additional__info">
                          <div className="additional__input-group">
                            <div className="additional__input">
                              <label htmlFor="">Ta’miri</label>
                              <select>
                                <option disabled selected hidden>
                                  Tanlash
                                </option>
                                <option>yaxshi</option>
                                <option>o`rtacha</option>
                                <option>ideal holatda</option>
                                <option>yomon</option>
                              </select>
                            </div>
                            <div className="additional__input">
                              <label htmlFor="">Uy turi</label>
                              <select>
                                <option disabled selected hidden>
                                  Tanlash
                                </option>
                                <option>Uyning bir qismi</option>
                                <option>Kvartira</option>
                                <option>Hashamatli</option>
                              </select>
                            </div>
                            <div className="additional__input">
                              <label htmlFor="">Devor turi</label>
                              <select>
                                <option disabled selected hidden>
                                  Tanlash
                                </option>
                                <option>pishga g`isht</option>
                                <option>loydan</option>
                                <option>shlakablok</option>
                              </select>
                            </div>
                            <div className="additional__input">
                              <label htmlFor="">Qurilgan yili</label>
                              <select>
                                <option disabled selected hidden>
                                  Tanlash
                                </option>
                                <option>2000-yil</option>
                                <option>2005-yil</option>
                                <option>2010-yil</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="furniture">
                          <div className="furniture__title">Mebelli</div>
                          <div className="furniture__btns">
                            <button className="furniture__btn">Ha</button>
                            <button className="furniture__btn">Yo`q</button>
                          </div>
                        </div>
                        <div className="checked-group">
                          <div className="location__title">Uy holati</div>
                          <div className="checkbox-container">
                            <div className="checkbox-group">
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Mualliflik loyihasi
                                </span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Evrota’mir</span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">O‘rtacha</span>
                              </label>
                            </div>
                            <div className="checkbox-group">
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Ta’nir talab</span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Qora suvoq</span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Tozalashdan avvalgi pardoz
                                </span>
                              </label>
                            </div>
                            <div className="checkbox-group">
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Buzilgan</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="additional__info">
                          <div className="additional__input-group">
                            <div className="additional__input">
                              <label htmlFor="">Electr ta’minoti</label>
                              <select>
                                <option disabled selected hidden>
                                  Tanlash
                                </option>
                                <option>bor</option>
                                <option>yo`q</option>
                              </select>
                            </div>
                            <div className="additional__input">
                              <label htmlFor="">Gaz</label>
                              <select>
                                <option disabled selected hidden>
                                  Tanlash
                                </option>
                                <option>bor</option>
                                <option>yo`q</option>
                              </select>
                            </div>
                            <div className="additional__input">
                              <label htmlFor="">Sanuzel</label>
                              <select>
                                <option disabled selected hidden>
                                  Tanlash
                                </option>
                                <option>bor</option>
                                <option>yo`q</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="checked-group">
                          <div className="location__title">Uyda / Uchastka</div>
                          <div className="checkbox-container">
                            <div className="checkbox-group">
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Internet</span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Telefon</span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Suz havzasi</span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Garaj</span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Konditsiioner</span>
                              </label>
                            </div>
                            <div className="checkbox-group">
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Maishiy texnika
                                </span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Kanalizatsiya</span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Tomorqa</span>
                              </label>

                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Qo‘riqchi</span>
                              </label>
                            </div>
                            <div className="checkbox-group">
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Sauna, hammom</span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Sportzal</span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Yo‘ldosh televideniya
                                </span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Yerto‘la, omborcha
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="checked-group">
                          <div className="location__title">
                            Yaqiida joylashgan
                          </div>
                          <div className="checkbox-container">
                            <div className="checkbox-group">
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Kasalxona, poliklinika
                                </span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Bolalar maydonchasi
                                </span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Bolalar bog‘chasi
                                </span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Bekatlar</span>
                              </label>
                            </div>
                            <div className="checkbox-group">
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Park, yashil zona
                                </span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Ko‘ngilochar muassasalar
                                </span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">
                                  Restoran, kafelar
                                </span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">turargoh</span>
                              </label>
                            </div>
                            <div className="checkbox-group">
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Supermarket</span>
                              </label>
                              <label class="checkbox">
                                <input
                                  class="checkbox_input"
                                  type="checkbox"
                                  name="chocalate"
                                />
                                <span class="checkbox-control"></span>
                                <span class="checkbox_text">Maktab</span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="furniture">
                          <div className="furniture__title">
                            Vositachilik haqqi
                          </div>
                          <div className="furniture__btns">
                            <button className="furniture__btn">Ha</button>
                            <button className="furniture__btn">Yo`q</button>
                          </div>
                        </div>
                      </div>
                      <div className="announcement__contact">
                        <div className="contact__title">
                          Aloqa uchun ma’lumotlar
                        </div>
                        <div className="contact__info">
                          <div className="contact__input-group">
                            <div className="contact__input">
                              <label htmlFor="">Joylashuv</label>
                              <input
                                placeholder="Shahar yoki pochta indeksi"
                                type="text"
                                value={location}
                                onChange={handleLocation}
                              />
                            </div>
                            <div className="contact__input">
                              <label htmlFor="">Email manzili</label>
                              <input
                                placeholder="e’lon@gmail.com"
                                type="text"
                                value={email}
                                onChange={handleEmail}
                              />
                            </div>
                            <div className="contact__input">
                              <label htmlFor="">Telefon raqami</label>
                              <input
                                placeholder="998 90 444 00 22"
                                className="last-child"
                                type="text"
                                value={phone}
                                onChange={handlePhone}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="announcement__agreement">
                        <label class="checkbox">
                          <input
                            class="checkbox_input"
                            type="checkbox"
                            name="chocalate"
                          />
                          <span class="checkbox-control"></span>
                          <span class="checkbox_text">
                            Mening qurilmaga elektron aloqa va
                            telekommunikatsiya orqali E’lon Group'dan, tegishli
                            tashkilotlar va ularning sheriklaridan tijorat,
                            hamda marketing xabarlarini (masalan, yangiliklar
                            byulleteni, SMS) olishga rozilik bildiraman.
                          </span>
                        </label>
                      </div>
                      <div className="announcement__put">
                        <div className="put-btns">
                          <button className="put-btn">Ko‘rib chiqish</button>
                          <button onClick={submitBtn} className="put-btn">
                            E’lon joylashtirish
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default Announcement;
