import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Data from '../Components/Data';
import App from '../App';
import Sidebar from '../Components/sidebar/Sidebar';
import Home from '../pages/Home';
import Add from '../pages/Ad';
import AdCategoriya from '../pages/AdCategoriya';
import Announcement from '../Components/announcement/Announcement';
import Product from '../pages/Product';
import LocalStorage from '../Components/localstorage/LocalStorage';

function Routes() {
  return (
    <Switch>
      {/* <Route path="/home" component={Xususiy}></Route> */}
      <Route path="/category/:title" component={AdCategoriya}></Route>
      <Route path="/category" component={Add}></Route>
      <Route path="/favourites" component={LocalStorage}></Route>
      <Route path="/categ/:category" component={Announcement}></Route>
      <Route path="/product/:id" component={Product}></Route>
      <Route path="/:name" component={Home}></Route>
      <Route path="/" exact component={Sidebar}></Route>
    </Switch>
  );
}

export default Routes;
