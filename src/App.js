import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import Lots from "./components/lots/Lots";
import AddLot from "./components/addLot/AddLot";

import { useState } from "react";
import Login from "./components/login/Login";

const array = [
  {
    id: 1,
    title: 'BMW X5 2010',
    price: 15000,
    img: require('./assets/cars-img/bmwx5051.jpg'),
    category: 'vehicles'
  },
  {
    id: 2,
    title: 'Sony Xperia',
    price: 3000,
    bid: 0,
    img: require('./assets/phones-img/sony xperia.jpg'),
    category: 'phones'
  },
  {
    id: 3,
    title: 'Acer Nitro 5',
    price: 5300,
    img: require('./assets/laptops-img/acer nitro 5.jpg'),
    category: 'laptops'
  },
  {
    id: 4,
    title: 'Vaz 2106',
    price: 2000,
    img: require('./assets/cars-img/vaz 2106.jpg'),
    category: 'vehicles'
  },
  {
    id: 5,
    title: 'Renault Captur',
    price: 9000,
    img: require('./assets/cars-img/RENAULT-CAPTUR-90KM-LIFT-LED-Kamera-Klimatronik.jpg'),
    category: 'vehicles'
  },
  {
    id: 6,
    title: 'Toyota Corolla',
    price: 12000,
    img: require('./assets/cars-img/toyota corolla.jpg'),
    category: 'vehicles',
    isClosed: false
  },
  {
    id: 7,
    title: 'Gigabyte G5',
    price: 5000,
    img: require('./assets/laptops-img/gigabyte g5.jpg'),
    category: 'laptops',
    isClosed: false
  },
  {
    id: 8,
    title: 'MacBook 12',
    price: 5500,
    img: require('./assets/laptops-img/macbook12.jpg'),
    category: 'laptops',
    isClosed: false
  },
  {
    id: 9,
    title: 'One Plus',
    price: 2500,
    img: require('./assets/phones-img/oneplus-10-pro-volcanic-black.jpg'),
    category: 'phones',
    isClosed: false
  },
  {
    id: 10,
    title: 'One Plus',
    price: 5100,
    img: require('./assets/laptops-img/lenovo legion 5.jpg'),
    category: 'laptops',
    isClosed: false
  },
]

function App() {
  const [lots, setLots] = useState(array);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAddLotVisible, setAddLotVisible] = useState(false);

  const handleLogin = (status) => {
    setLoggedIn(status);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleLotClose = (lotId) => {
    const answer = window.confirm('Are you reall want to close lot?');
    if (answer) {
      const updatedLots = lots.map((lot) =>
        lot.id === lotId ? { ...lot, isClosed: true } : lot
      );
      setLots(updatedLots);
    }
  };

  const handleAddLot = (newLot) => {
    setLots((prevLots) => [...prevLots, { ...newLot, id: lots.length + 1 }]);
    setAddLotVisible(false);
  };

  const filteredLots = selectedCategory === 'all'
    ? lots
    : lots.filter((lot) => lot.category === selectedCategory);

  return (
    <div className="App">
      {isAddLotVisible && <div className="overlay"></div>}
      {
        isLoggedIn ?
          <>
            <Header />
            <div className="main">
              <Categories onCategoryChange={handleCategoryChange} />
              <Lots lots={filteredLots} onCloseLot={handleLotClose} />
              <button className="add-lot-btn" onClick={() => setAddLotVisible(!isAddLotVisible)}>
                {isAddLotVisible ? 'Hide Add Lot' : 'Show Add Lot'}
              </button>
              {isAddLotVisible && <AddLot onAddLot={handleAddLot} />}
            </div>
          </>
          :
          <Login onLogin={handleLogin} />
      }
    </div>
  );
}

export default App;