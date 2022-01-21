import React, { useState } from 'react';
import Header from './Components/header/Header';
import Sidebar from './Components/sidebar/Sidebar';
import Routes from './config/Routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ScrollToTop } from './Components/product/Product';
import { UserContext } from './Components/userContext';
import { Productss } from './Components/Data';

const Product = Productss.filter(
  (item) => item.link === window.location.pathname
);

function App() {
  const [menu, setMenu] = useState(Product.slice(0, 100));
  const localData = localStorage.getItem('fruits');
  const [item, setItem] = useState(localData ? JSON.parse(localData) : []);
  return (
    <div>
      <UserContext.Provider value={{ menu, setMenu, item, setItem }}>
        <Router forceRefresh={true}>
          <ScrollToTop>
            <Routes></Routes>
          </ScrollToTop>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
