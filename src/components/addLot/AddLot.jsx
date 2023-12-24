import React, { useState } from 'react';
import './addLot.css';

const AddLot = ({ onAddLot }) => {
  const [newLot, setNewLot] = useState({
    id: null,
    title: '',
    price: 0,
    img: '',
    category: 'laptops',
    isClosed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLot((prevLot) => ({ ...prevLot, [name]: value }));
  };

  const handleAddLot = () => {
    if (newLot.title && newLot.price && newLot.img && newLot.category) {
      onAddLot(newLot);
      setNewLot({
        id: null,
        title: '',
        price: 0,
        img: '',
        category: 'laptops',
        isClosed: false,
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="add-lot">
      <h2>Add New Lot</h2>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={newLot.title}
        onChange={handleChange}
      />
      <label>Price:</label>
      <input
        type="number"
        name="price"
        value={newLot.price}
        onChange={handleChange}
      />
      <label>Image URL:</label>
      <input
        type="text"
        name="img"
        value={newLot.img}
        onChange={handleChange}
      />
      <label>Category:</label>
      <select name="category" value={newLot.category} onChange={handleChange}>
        <option value="laptops">Laptops</option>
        <option value="phones">Phones</option>
        <option value="vehicles">Vehicles</option>
      </select>
      <button onClick={handleAddLot}>Add Lot</button>
    </div>
  );
};

export default AddLot;
