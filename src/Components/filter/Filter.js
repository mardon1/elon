import React, { useState } from 'react';
import bannerXususiy from '../../img/bannerXususiy.png';
import bannerKvartira from '../../img/bannerKvartira.png';
import bannerUchastka from '../../img/bannerUchastka.png';
import bannerTijorat from '../../img/bannerTijorat.png';
import bannerGaraj from '../../img/bannerGaraj.png';
import bannerAvto from '../../img/banner1.png';
import bannerMoto from '../../img/bannerMoto.png';
import bannerMaxsus from '../../img/bannerMaxsus.png';
import bannerYuk from '../../img/bannerYuk.png';
import bannerQishloq from '../../img/bannerQishloq.png';
import bannerSuv from '../../img/bannerSuv.png';
import bannerOther from '../../img/bannerBoshqa.png';
import bannerBus from '../../img/bannerAvto.png';
import bannerAksessuar from '../../img/bannerAksesuar.png';
import bannerMoto1 from '../../img/bannerMoto1.png';
import bannerGPS from '../../img/bannerGPS.png';
import bannerShina from '../../img/bannerShina.png';
import bannerMoy from '../../img/bannerMoy.png';
import bannerIsh from '../../img/bannerIsh.png';
import bannerXizmat from '../../img/bannerXizmat.png';
import bannerBog from '../../img/bannerBog.png';
import bannerModa from '../../img/bannerModa.png';
import bannerBolalar from '../../img/bannerBolalar.png';
import bannerHayvon from '../../img/bannerHayvon.png';
import bannerXobbi from '../../img/bannerXobbi.png';
import img2 from '../../img/banner9.png';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import './filter.css';
import { Mulk } from '../Data';
import { Data } from '../Data';
import { Productss } from '../Data';

function Filter({ setMenu }) {
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [floor1, setFloor1] = useState('');
  const [floor2, setFloor2] = useState('');
  const [furniture, setFurniture] = useState('');
  const [price1, setPrice1] = useState('');
  const [price2, setPrice2] = useState('');
  const [currency, setCurrency] = useState('');
  const [mediator, setMediator] = useState('');
  const [rooms1, setRooms1] = useState('');
  const [rooms2, setRooms2] = useState('');
  const [allArea1, setAllArea1] = useState('');
  const [allArea2, setAllArea2] = useState('');
  const [area1, setArea1] = useState('');
  const [area2, setArea2] = useState('');
  const [brand, setBrand] = useState('');
  const [engine1, setEngine1] = useState('');
  const [engine2, setEngine2] = useState('');
  const [year1, setYear1] = useState('');
  const [year2, setYear2] = useState('');
  const [way1, setWay1] = useState('');
  const [way2, setWay2] = useState('');

  const handleForCategory = (e) => {
    const filterCategory = Productss.filter(
      (item) =>
        (item.category === e.target.value || e.target.value === 'Hammasi') &&
        (type === item.type || type === '') &&
        (location === item.location || location === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (currency === item.currency || currency === '') &&
        (mediator === item.isMediator || mediator === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        (area1 < item.area || area1 === '') &&
        (item.link === window.location.pathname ||
          window.location.pathname === '')
    );

    setMenu(filterCategory);
    setCategory(e.target.value);
  };

  const handleForType = (e) => {
    const filterType = Productss.filter(
      (item) =>
        (item.type === e.target.value || e.target.value === 'Hammasi') &&
        (category === item.category || category === '') &&
        (location === item.location || location === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (currency === item.currency || currency === '') &&
        (mediator === item.isMediator || mediator === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        (area1 < item.area || area1 === '') &&
        item.link === window.location.pathname
    );

    setMenu(filterType);
    setType(e.target.value);
  };

  const handleForLocation = (e) => {
    const filterLocation = Productss.filter(
      (item) =>
        (item.location === e.target.value || e.target.value === 'Hammasi') &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (currency === item.currency || currency === '') &&
        (mediator === item.isMediator || mediator === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        (area1 < item.area || area1 === '') &&
        item.link === window.location.pathname
    );

    setMenu(filterLocation);
    setLocation(e.target.value);
  };

  const handleForFloor1 = (e) => {
    const filterFloor = Productss.filter(
      (item) =>
        e.target.value < item.floor &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (location === item.location || location === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (currency === item.currency || currency === '') &&
        (mediator === item.isMediator || mediator === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        (area1 < item.area || area1 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterFloor);
    setFloor1(e.target.value);
  };

  const handleForFloor2 = (e) => {
    const filterFloor = Productss.filter(
      (item) =>
        e.target.value > item.floor &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (location === item.location || location === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (mediator === item.isMediator || mediator === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (currency === item.currency || currency === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        (area1 < item.area || area1 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterFloor);
    setFloor2(e.target.value);
  };

  const handleForFurniture = (e) => {
    const filterFurniture = Productss.filter(
      (item) =>
        (e.target.value === item.isFurniture || e.target.value === 'Hammasi') &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (location === item.location || location === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (currency === item.currency || currency === '') &&
        (mediator === item.isMediator || mediator === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        (area1 < item.area || area1 === '') &&
        item.link === window.location.pathname
    );

    setMenu(filterFurniture);
    setFurniture(e.target.value);
  };

  const handleForPrice1 = (e) => {
    const filterPrice = Productss.filter(
      (item) =>
        e.target.value < item.price &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (location === item.location || location === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price2 > item.price || price2 === '') &&
        (currency === item.currency || currency === '') &&
        (mediator === item.isMediator || mediator === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        (area1 < item.area || area1 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterPrice);
    setPrice1(e.target.value);
    // console.log(item.price);
  };
  const handleForPrice2 = (e) => {
    const filterPrice = Productss.filter(
      (item) =>
        e.target.value > item.price &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (location === item.location || location === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price1 < item.price || price1 === '') &&
        (currency === item.currency || currency === '') &&
        (mediator === item.isMediator || mediator === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        (area1 < item.area || area1 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterPrice);
    setPrice2(e.target.value);
  };

  const handleForCurrency = (e) => {
    const filterCurrency = Productss.filter(
      (item) =>
        (e.target.value === item.currency || e.target.value === 'Hammasi') &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (location === item.location || location === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (mediator === item.isMediator || mediator === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        (area1 < item.area || area1 === '') &&
        item.link === window.location.pathname
    );

    setMenu(filterCurrency);
    setCurrency(e.target.value);
  };

  const handleForMediator = (e) => {
    const filterMediator = Productss.filter(
      (item) =>
        (e.target.value === item.isMediator || e.target.value === 'Hammasi') &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (location === item.location || location === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (currency === item.currency || currency === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        (area1 < item.area || area1 === '') &&
        item.link === window.location.pathname
    );

    setMenu(filterMediator);
    setMediator(e.target.value);
  };

  const handleForRooms1 = (e) => {
    const filterRooms = Productss.filter(
      (item) =>
        e.target.value < item.rooms &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (location === item.location || location === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (currency === item.currency || currency === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        (area1 < item.area || area1 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterRooms);
    setRooms1(e.target.value);
  };

  const handleForRooms2 = (e) => {
    const filterRooms = Productss.filter(
      (item) =>
        e.target.value > item.rooms &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (location === item.location || location === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price1 < item.price || price1 === '') &&
        (currency === item.currency || currency === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        (area1 < item.area || area1 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterRooms);
    setRooms2(e.target.value);
  };

  const handleForAllArea1 = (e) => {
    const filterAllArea = Productss.filter(
      (item) =>
        e.target.value < item.allArea &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (location === item.location || location === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (currency === item.currency || currency === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        (area1 < item.area || area1 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterAllArea);
    setAllArea1(e.target.value);
  };

  const handleForAllArea2 = (e) => {
    const filterAllArea = Productss.filter(
      (item) =>
        e.target.value > item.allArea &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (location === item.location || location === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (currency === item.currency || currency === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (area1 < item.area || area1 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterAllArea);
    setAllArea2(e.target.value);
  };

  const handleForArea1 = (e) => {
    const filterAllArea = Productss.filter(
      (item) =>
        e.target.value < item.area &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (location === item.location || location === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (currency === item.currency || currency === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterAllArea);
    setArea1(e.target.value);
  };

  const handleForArea2 = (e) => {
    const filterAllArea = Productss.filter(
      (item) =>
        e.target.value > item.area &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (location === item.location || location === '') &&
        (floor1 < item.floor || floor1 === '') &&
        (floor2 > item.floor || floor2 === '') &&
        (item.isFurniture === furniture || furniture === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (currency === item.currency || currency === '') &&
        (rooms1 < item.rooms || rooms1 === '') &&
        (rooms2 > item.rooms || rooms2 === '') &&
        (allArea1 < item.allArea || allArea1 === '') &&
        (allArea2 > item.allArea || allArea2 === '') &&
        (area1 < item.area || area1 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterAllArea);
    setArea2(e.target.value);
  };

  const handleForCarCategory = (e) => {
    const filterBrand = Productss.filter(
      (item) =>
        (e.target.value === item.category || e.target.value === 'Hammasi') &&
        (type === item.type || type === '') &&
        (brand === item.brand || brand === '') &&
        (engine1 < item.engineVolume || engine1 === '') &&
        (engine2 > item.engineVolume || engine2 === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (year1 < item.year || year1 === '') &&
        (year2 > item.year || year2 === '') &&
        (way1 < item.way || way1 === '') &&
        (way2 > item.way || way2 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterBrand);
    setCategory(e.target.value);
  };

  const handleForCarType = (e) => {
    const filterBrand = Productss.filter(
      (item) =>
        (e.target.value === item.type || e.target.value === 'Hammasi') &&
        (brand === item.brand || brand === '') &&
        (category === item.category || category === '') &&
        (engine1 < item.engineVolume || engine1 === '') &&
        (engine2 > item.engineVolume || engine2 === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (year1 < item.year || year1 === '') &&
        (year2 > item.year || year2 === '') &&
        (way1 < item.way || way1 === '') &&
        (way2 > item.way || way2 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterBrand);
    setType(e.target.value);
  };

  const handleForBrand = (e) => {
    const filterBrand = Productss.filter(
      (item) =>
        (e.target.value === item.brand || e.target.value === 'Hammasi') &&
        (type === item.type || type === '') &&
        (category === item.category || category === '') &&
        (engine1 < item.engineVolume || engine1 === '') &&
        (engine2 > item.engineVolume || engine2 === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (year1 < item.year || year1 === '') &&
        (year2 > item.year || year2 === '') &&
        (way1 < item.way || way1 === '') &&
        (way2 > item.way || way2 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterBrand);
    setBrand(e.target.value);
  };

  const handleForYear1 = (e) => {
    const filterBrand = Productss.filter(
      (item) =>
        (e.target.value < item.year || e.target.value === 'Hammasi') &&
        (type === item.type || type === '') &&
        (brand === item.brand || brand === '') &&
        (category === item.category || category === '') &&
        (engine1 < item.engineVolume || engine1 === '') &&
        (engine2 > item.engineVolume || engine2 === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (year2 > item.year || year2 === '') &&
        (way1 < item.way || way1 === '') &&
        (way2 > item.way || way2 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterBrand);
    setYear1(e.target.value);
  };

  const handleForYear2 = (e) => {
    const filterBrand = Productss.filter(
      (item) =>
        (e.target.value > item.year || e.target.value === 'Hammasi') &&
        (type === item.type || type === '') &&
        (brand === item.brand || brand === '') &&
        (category === item.category || category === '') &&
        (engine1 < item.engineVolume || engine1 === '') &&
        (engine2 > item.engineVolume || engine2 === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (year1 < item.year || year1 === '') &&
        (way1 < item.way || way1 === '') &&
        (way2 > item.way || way2 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterBrand);
    setYear2(e.target.value);
  };

  const handleForEngine1 = (e) => {
    const filterBrand = Productss.filter(
      (item) =>
        (e.target.value < item.engineVolume || e.target.value === 'Hammasi') &&
        (type === item.type || type === '') &&
        (brand === item.brand || brand === '') &&
        (category === item.category || category === '') &&
        (engine2 > item.engineVolume || engine2 === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (year1 < item.year || year1 === '') &&
        (year2 > item.year || year2 === '') &&
        (way1 < item.way || way1 === '') &&
        (way2 > item.way || way2 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterBrand);
    setEngine1(e.target.value);
  };

  const handleForEngine2 = (e) => {
    const filterBrand = Productss.filter(
      (item) =>
        (e.target.value > item.engineVolume || e.target.value === 'Hammasi') &&
        (type === item.type || type === '') &&
        (brand === item.brand || brand === '') &&
        (category === item.category || category === '') &&
        (engine1 < item.engineVolume || engine1 === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (year1 < item.year || year1 === '') &&
        (year2 > item.year || year2 === '') &&
        (way1 < item.way || way1 === '') &&
        (way2 > item.way || way2 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterBrand);
    setEngine2(e.target.value);
  };

  const handleForWay1 = (e) => {
    const filterBrand = Productss.filter(
      (item) =>
        (e.target.value < item.way || e.target.value === 'Hammasi') &&
        (type === item.type || type === '') &&
        (brand === item.brand || brand === '') &&
        (category === item.category || category === '') &&
        (engine1 < item.engineVolume || engine1 === '') &&
        (engine2 > item.engineVolume || engine2 === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (year1 < item.year || year1 === '') &&
        (year2 > item.year || year2 === '') &&
        (way2 > item.way || way2 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterBrand);
    setWay1(e.target.value);
  };

  const handleForWay2 = (e) => {
    const filterBrand = Productss.filter(
      (item) =>
        (e.target.value > item.way || e.target.value === 'Hammasi') &&
        (type === item.type || type === '') &&
        (brand === item.brand || brand === '') &&
        (category === item.category || category === '') &&
        (engine1 < item.engineVolume || engine1 === '') &&
        (engine2 > item.engineVolume || engine2 === '') &&
        (price1 < item.price || price1 === '') &&
        (price2 > item.price || price2 === '') &&
        (year1 < item.year || year1 === '') &&
        (year2 > item.year || year2 === '') &&
        (way1 < item.way || way1 === '') &&
        item.link === window.location.pathname
    );
    setMenu(filterBrand);
    setWay2(e.target.value);
  };

  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <main>
      <div className="main__search">
        <input type="number" placeholder="Qidiruv" />
        <Icon className="search__icon" icon="feather:x" />
        <button>Qidiruv</button>
      </div>

      <div className="main__slide">
        {Data.map((item, index) => {
          if (
            window.location.pathname === item.link1 ||
            window.location.pathname === item.link2 ||
            window.location.pathname === item.link3 ||
            window.location.pathname === item.link4 ||
            window.location.pathname === item.link5
          )
            return (
              <div>
                {item.submenu.map((item, index) => {
                  if (window.location.pathname === item.link)
                    return (
                      <div>
                        {category === 'Xusuiy uylar' ||
                        window.location.pathname === '/home' ? (
                          <img src={bannerXususiy} alt="" />
                        ) : null}
                        {category === 'Kvartiralar' ||
                        window.location.pathname === '/kvartiralar' ? (
                          <img src={bannerKvartira} alt="" />
                        ) : null}
                        {category === 'Yer Uchastkasi' ||
                        window.location.pathname === '/yer-uchastkasi' ? (
                          <img src={bannerUchastka} alt="" />
                        ) : null}
                        {category === 'Tijorat binolari' ||
                        window.location.pathname === '/tijorat-binolari' ? (
                          <img src={bannerTijorat} alt="" />
                        ) : null}
                        {category === 'Garajlar' ||
                        window.location.pathname === '/garajlar' ? (
                          <img src={bannerGaraj} alt="" />
                        ) : null}

                        {window.location.pathname === '/avtomobil' &&
                        category !== 'Yengil avtomashinalar' &&
                        category !== 'Moto' ? (
                          <img src={bannerAvto} alt="" />
                        ) : null}

                        {category === 'Yengil avtomashinalar' &&
                        window.location.pathname === '/avtomobil' ? (
                          <img src={bannerAvto} alt="" />
                        ) : null}

                        {category === 'Moto' &&
                        window.location.pathname === '/avtomobil' ? (
                          <img src={bannerMoto} alt="" />
                        ) : null}

                        {(category === 'Yuk mashinalari' ||
                          category === '' ||
                          category === 'Hammasi') &&
                        window.location.pathname === '/maxsus-texnika' ? (
                          <img src={bannerYuk} alt="" />
                        ) : null}

                        {category === 'Qishloq xo`jalik texnikasi' &&
                        window.location.pathname === '/maxsus-texnika' ? (
                          <img src={bannerQishloq} alt="" />
                        ) : null}

                        {category === 'Suv transporti' &&
                        window.location.pathname === '/maxsus-texnika' ? (
                          <img src={bannerSuv} alt="" />
                        ) : null}

                        {category === 'Maxsus texnika' &&
                        window.location.pathname === '/maxsus-texnika' ? (
                          <img src={bannerMaxsus} alt="" />
                        ) : null}

                        {category === 'Tirkamalar' &&
                        window.location.pathname === '/maxsus-texnika' ? (
                          <img src={bannerQishloq} alt="" />
                        ) : null}

                        {category === 'Boshqa transport' &&
                        window.location.pathname === '/maxsus-texnika' ? (
                          <img src={bannerOther} alt="" />
                        ) : null}

                        {category === 'Avtobuslar' &&
                        window.location.pathname === '/maxsus-texnika' ? (
                          <img src={bannerBus} alt="" />
                        ) : null}

                        {(category === 'Avto ehtiyot qismlari va aksesuarlar' ||
                          category === '' ||
                          category === 'Maxsus texnika uchun qismlar' ||
                          category === 'Hammasi') &&
                        type !== 'GPS-navigatorlar, avtoregistratorlar' &&
                        window.location.pathname === '/aksessuarlar' ? (
                          <img src={bannerAksessuar} alt="" />
                        ) : null}

                        {category === 'Avto ehtiyot qismlari va aksesuarlar' &&
                        type === 'GPS-navigatorlar, avtoregistratorlar' &&
                        window.location.pathname === '/aksessuarlar' ? (
                          <img src={bannerGPS} alt="" />
                        ) : null}

                        {category === 'Moto ehtiyot qismlari va aksesuarlar' &&
                        window.location.pathname === '/aksessuarlar' ? (
                          <img src={bannerMoto1} alt="" />
                        ) : null}

                        {category === 'Shinalar disklar va g`ildiraklar' &&
                        window.location.pathname === '/aksessuarlar' ? (
                          <img src={bannerShina} alt="" />
                        ) : null}

                        {category === 'Boshqa ehtiyot qismlari' &&
                        window.location.pathname === '/aksessuarlar' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/ish-kerak' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/ish-izlayapman' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/xizmatlar' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/elektron-qurilmalar' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname ===
                        '/uy-uchun-elektr-jihozlar' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname ===
                        '/boshqa-elektr-jihozlar' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/uy' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/bog' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/kiyim-kechak' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/qol-soatlari' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/aksesuarlar' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/gozallik-salomatlik' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/boshqalar' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/bolalar-kiyimlari' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/bolalar-mebellari' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/bolalar-yeguliklari' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname ===
                        '/maktab-oquvchilariga' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                        {window.location.pathname === '/boshqalar' ? (
                          <img src={bannerMoy} alt="" />
                        ) : null}
                      </div>
                    );
                })}
                <ul className="filter__list">
                  {item.submenu.map((item) => {
                    return (
                      <div className="filter">
                        <Link
                          to={item.link}
                          className={
                            window.location.pathname === item.link
                              ? 'filter__item active'
                              : 'filter__item'
                          }
                        >
                          {item.title}
                        </Link>
                      </div>
                    );
                  })}
                </ul>
                <div>
                  <div className="filter__products">
                    {item.submenu.map((sub) => {
                      if (window.location.pathname === sub.link)
                        return (
                          <>
                            {sub.option_title ? (
                              <div className="filter__group">
                                <label htmlFor="">{sub.option_title}</label>
                                <select
                                  datatype="birnima"
                                  id={category}
                                  className="filter__product-big"
                                  onChange={handleForCategory}
                                >
                                  {sub.optionForTime1 ? (
                                    <option>{sub.optionForTime1}</option>
                                  ) : null}
                                  {sub.optionForTime2 ? (
                                    <option>{sub.optionForTime2}</option>
                                  ) : null}
                                  {sub.optionForTime3 ? (
                                    <option>{sub.optionForTime3}</option>
                                  ) : null}
                                  {sub.optionForTime4 ? (
                                    <option>{sub.optionForTime4}</option>
                                  ) : null}
                                </select>
                              </div>
                            ) : null}
                            {sub.optionForCarCategory ? (
                              <div className="filter__group">
                                <label htmlFor="">
                                  {sub.optionForCarCategory}
                                </label>
                                <select
                                  id={type}
                                  onChange={handleForCarCategory}
                                  className="filter__product-big"
                                >
                                  {sub.optionForTime1 ? (
                                    <option>{sub.optionForTime1}</option>
                                  ) : null}
                                  {sub.optionForTime2 ? (
                                    <option>{sub.optionForTime2}</option>
                                  ) : null}
                                  {sub.optionForTime3 ? (
                                    <option>{sub.optionForTime3}</option>
                                  ) : null}
                                  {sub.optionForTime4 ? (
                                    <option>{sub.optionForTime4}</option>
                                  ) : null}
                                  {sub.optionForTime5 ? (
                                    <option>{sub.optionForTime5}</option>
                                  ) : null}
                                  {sub.optionForTime6 ? (
                                    <option>{sub.optionForTime6}</option>
                                  ) : null}
                                  {sub.optionForTime7 ? (
                                    <option>{sub.optionForTime7}</option>
                                  ) : null}
                                  {sub.optionForTime8 ? (
                                    <option>{sub.optionForTime8}</option>
                                  ) : null}
                                </select>
                              </div>
                            ) : null}

                            {sub.optionForCarTypeTitle ? (
                              <div className="filter__group">
                                <label htmlFor="">
                                  {sub.optionForCarTypeTitle}
                                </label>
                                <select
                                  id={type}
                                  onChange={handleForCarType}
                                  className="filter__product-big"
                                >
                                  {sub.optionForType1 ? (
                                    <option>{sub.optionForType1}</option>
                                  ) : null}
                                  {sub.optionForType2 ? (
                                    <option>{sub.optionForType2}</option>
                                  ) : null}
                                  {sub.optionForType3 ? (
                                    <option>{sub.optionForType3}</option>
                                  ) : null}
                                  {sub.optionForType4 ? (
                                    <option>{sub.optionForType4}</option>
                                  ) : null}
                                  {sub.optionForType5 ? (
                                    <option>{sub.optionForType5}</option>
                                  ) : null}
                                  {sub.optionForType6 ? (
                                    <option>{sub.optionForType6}</option>
                                  ) : null}
                                  {sub.optionForType7 ? (
                                    <option>{sub.optionForType7}</option>
                                  ) : null}
                                  {sub.optionForType8 ? (
                                    <option>{sub.optionForType8}</option>
                                  ) : null}
                                  {sub.optionForType9 ? (
                                    <option>{sub.optionForType9}</option>
                                  ) : null}
                                  {sub.optionForType10 ? (
                                    <option>{sub.optionForType10}</option>
                                  ) : null}
                                  {sub.optionForType11 ? (
                                    <option>{sub.optionForType11}</option>
                                  ) : null}
                                  {sub.optionForType12 ? (
                                    <option>{sub.optionForType12}</option>
                                  ) : null}
                                  {sub.optionForType13 ? (
                                    <option>{sub.optionForType13}</option>
                                  ) : null}

                                  {/* <option>{sub.optionForType4}</option> */}
                                </select>
                              </div>
                            ) : null}
                            {sub.optionForTypeTitle ? (
                              <div className="filter__group">
                                <label htmlFor="">
                                  {sub.optionForTypeTitle}
                                </label>
                                <select
                                  id={type}
                                  onChange={handleForType}
                                  className="filter__product-big"
                                >
                                  <option>{sub.optionForType1}</option>
                                  <option>{sub.optionForType2}</option>
                                  <option>{sub.optionForType3}</option>
                                  {/* <option>{sub.optionForType4}</option> */}
                                </select>
                              </div>
                            ) : null}
                            {sub.optionForBrandTitle ? (
                              <div className="filter__group">
                                <label htmlFor="">
                                  {sub.optionForBrandTitle}
                                </label>
                                <select
                                  id={type}
                                  onChange={handleForBrand}
                                  className="filter__product-big"
                                >
                                  <option>{sub.optionForBrand1}</option>
                                  <option>{sub.optionForBrand2}</option>
                                  <option>{sub.optionForBrand3}</option>
                                  <option>{sub.optionForBrand4}</option>
                                  <option>{sub.optionForBrand5}</option>
                                  {/* <option>{sub.optionForType4}</option> */}
                                </select>
                              </div>
                            ) : null}

                            {sub.optionForLocation1 &&
                            category !== 'Ijara bir kunlik' ? (
                              <div className="filter__group">
                                <label htmlFor="">
                                  {sub.optionForLocationTitle}
                                </label>
                                <select
                                  className="filter__product-big"
                                  onChange={handleForLocation}
                                >
                                  <option>{sub.optionForLocation1}</option>
                                  <option>{sub.optionForLocation2}</option>
                                  <option>{sub.optionForLocation3}</option>
                                  <option>{sub.optionForLocation4}</option>
                                  <option>{sub.optionForLocation5}</option>
                                  <option>{sub.optionForLocation6}</option>
                                  <option>{sub.optionForLocation7}</option>
                                  <option>{sub.optionForLocation8}</option>
                                  <option>{sub.optionForLocation9}</option>
                                  <option>{sub.optionForLocation10}</option>
                                  <option>{sub.optionForLocation11}</option>
                                  <option>{sub.optionForLocation12}</option>
                                  <option>{sub.optionForLocation13}</option>
                                </select>
                              </div>
                            ) : null}
                            {sub.optionForFloorTitle &&
                            category !== 'Ijara bir kunlik' ? (
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <div className="filter__group">
                                  <label htmlFor="">
                                    {sub.optionForFloorTitle}
                                  </label>
                                  <input
                                    type="number"
                                    className="filter__product-small"
                                    placeholder={sub.optionForFloorPlaceholder1}
                                    onChange={handleForFloor1}
                                  />
                                </div>
                                <div className="filter__group">
                                  <input
                                    type="number"
                                    className="filter__product-small last-child"
                                    placeholder={sub.optionForFloorPlaceholder2}
                                    onChange={handleForFloor2}
                                  />
                                </div>
                              </div>
                            ) : null}
                            {sub.optionForFurnitureTitle &&
                            category !== 'Ijara bir kunlik' ? (
                              <div className="filter__group">
                                <label htmlFor="">
                                  {sub.optionForFurnitureTitle}
                                </label>
                                <select
                                  className="filter__product-big"
                                  onChange={handleForFurniture}
                                >
                                  <option>{sub.optionForFurniture1}</option>
                                  <option>{sub.optionForFurniture2}</option>
                                  <option>{sub.optionForFurniture3}</option>
                                </select>
                              </div>
                            ) : null}

                            {sub.optionForPriceTitle ? (
                              <div
                                className={
                                  window.location.pathname ===
                                    '/yer-uchastkasi' ||
                                  window.location.pathname ===
                                    '/tijorat-binolari' ||
                                  window.location.pathname === '/avtomobil'
                                    ? 'item__wrapper last-child'
                                    : 'item__wrapper'
                                }
                              >
                                <div className="filter__group">
                                  <label htmlFor="">
                                    {sub.optionForPriceTitle}
                                  </label>
                                  <input
                                    type="number"
                                    className="filter__product-small"
                                    placeholder={sub.optionForPricePlaceholder1}
                                    onChange={handleForPrice1}
                                  />
                                </div>
                                <div className="filter__group">
                                  <input
                                    type="number"
                                    className="filter__product-small last-child"
                                    placeholder={sub.optionForPricePlaceholder2}
                                    onChange={handleForPrice2}
                                  />
                                </div>
                              </div>
                            ) : null}

                            {sub.optionForEngineTitle ? (
                              <div className="item__wrapper">
                                <div className="filter__group">
                                  <label htmlFor="">
                                    {sub.optionForEngineTitle}
                                  </label>
                                  <input
                                    type="number"
                                    className="filter__product-small"
                                    placeholder={
                                      sub.optionForEnginePlaceholder1
                                    }
                                    onChange={handleForEngine1}
                                  />
                                </div>
                                <div className="filter__group">
                                  <input
                                    type="number"
                                    className="filter__product-small last-child"
                                    placeholder={
                                      sub.optionForEnginePlaceholder2
                                    }
                                    onChange={handleForEngine2}
                                  />
                                </div>
                              </div>
                            ) : null}

                            {sub.optionForYearTitle ? (
                              <div className="item__wrapper">
                                <div className="filter__group">
                                  <label htmlFor="">
                                    {sub.optionForYearTitle}
                                  </label>
                                  <input
                                    type="number"
                                    className="filter__product-small"
                                    placeholder={sub.optionForYearPlaceholder1}
                                    onChange={handleForYear1}
                                  />
                                </div>
                                <div className="filter__group">
                                  <input
                                    type="number"
                                    className="filter__product-small last-child"
                                    placeholder={sub.optionForYearPlaceholder2}
                                    onChange={handleForYear2}
                                  />
                                </div>
                              </div>
                            ) : null}

                            {sub.optionForWayTitle ? (
                              <div className="item__wrapper">
                                <div className="filter__group">
                                  <label htmlFor="">
                                    {sub.optionForWayTitle}
                                  </label>
                                  <input
                                    type="number"
                                    className="filter__product-small"
                                    placeholder={sub.optionForWayPlaceholder1}
                                    onChange={handleForWay1}
                                  />
                                </div>
                                <div className="filter__group">
                                  <input
                                    type="number"
                                    className="filter__product-small last-child"
                                    placeholder={sub.optionForWayPlaceholder2}
                                    onChange={handleForWay2}
                                  />
                                </div>
                              </div>
                            ) : null}

                            {sub.optionForCurrencyTitle ? (
                              <div className="filter__group">
                                <label htmlFor="">
                                  {sub.optionForCurrencyTitle}
                                </label>
                                <select
                                  className={
                                    window.location.pathname === '/garajlar'
                                      ? 'filter__product-big last-child'
                                      : 'filter__product-big'
                                  }
                                  onChange={handleForCurrency}
                                >
                                  <option>{sub.optionForCurrency1}</option>
                                  <option>{sub.optionForCurrency2}</option>
                                  <option>{sub.optionForCurrency3}</option>
                                </select>
                              </div>
                            ) : null}

                            {sub.optionForMediatorTitle &&
                            category !== 'Ijara bir kunlik' ? (
                              <div className="filter__group">
                                <label htmlFor="">
                                  {sub.optionForMediatorTitle}
                                </label>
                                <select
                                  className={
                                    window.location.pathname ===
                                      '/kvartiralar' ||
                                    window.location.pathname === '/home'
                                      ? 'filter__product-big last-child'
                                      : 'filter__product-big'
                                  }
                                  onChange={handleForMediator}
                                >
                                  <option>{sub.optionForMediator1}</option>
                                  <option>{sub.optionForMediator2}</option>
                                  <option>{sub.optionForMediator3}</option>
                                </select>
                              </div>
                            ) : null}

                            {sub.optionForRoomsTitle ? (
                              <div
                                className={
                                  window.location.pathname ===
                                  '/tijorat-binolari'
                                    ? 'item__wrapper last-child'
                                    : 'item__wrapper'
                                }
                              >
                                <div className="filter__group">
                                  <label htmlFor="">
                                    {sub.optionForRoomsTitle}
                                  </label>
                                  <input
                                    type="number"
                                    className="filter__product-small"
                                    placeholder={sub.optionForRoomsPlaceholder1}
                                    onChange={handleForRooms1}
                                  />
                                </div>
                                <div className="filter__group">
                                  <input
                                    type="number"
                                    className="filter__product-small last-child"
                                    placeholder={sub.optionForRoomsPlaceholder2}
                                    onChange={handleForRooms2}
                                  />
                                </div>
                              </div>
                            ) : null}

                            {sub.optionForAllAreaTitle ? (
                              <div
                                className={
                                  window.location.pathname ===
                                  '/tijorat-binolari'
                                    ? 'item__wrapper last-child'
                                    : 'item__wrapper'
                                }
                              >
                                <div className="filter__group">
                                  <label htmlFor="">
                                    {sub.optionForAllAreaTitle}
                                  </label>
                                  <input
                                    type="number"
                                    className="filter__product-small"
                                    placeholder={
                                      sub.optionForAllAreaPlaceholder1
                                    }
                                    onChange={handleForAllArea1}
                                  />
                                </div>
                                <div className="filter__group">
                                  <input
                                    type="number"
                                    className="filter__product-small last-child"
                                    placeholder={
                                      sub.optionForAllAreaPlaceholder2
                                    }
                                    onChange={handleForArea2}
                                  />
                                </div>
                              </div>
                            ) : null}

                            {sub.optionForAreaTitle &&
                            category !== 'Ijara bir kunlik' ? (
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <div className="filter__group">
                                  <label htmlFor="">
                                    {sub.optionForAreaTitle}
                                  </label>
                                  <input
                                    type="number"
                                    className="filter__product-small"
                                    placeholder={sub.optionForAreaPlaceholder1}
                                    onChange={handleForArea1}
                                  />
                                </div>
                                <div className="filter__group">
                                  <input
                                    type="number"
                                    className="filter__product-small last-child"
                                    placeholder={sub.optionForAreaPlaceholder2}
                                    onChange={handleForArea1}
                                  />
                                </div>
                              </div>
                            ) : null}
                          </>
                        );
                    })}
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </main>
  );
}

export default Filter;
