import React, { useState } from 'react';
import './lots.css';

const Lots = ({ lots, onCloseLot }) => {
  const handleLotClose = (lotId) => {
    onCloseLot(lotId);
  };

  return (
    <div className='lots'>
      {lots.length ? (
        lots.map((lot) => (
          <div className="lot" key={lot.id}>
            <img className="lot-img" src={lot.img} alt="lot" />
            <div className="lot-info">
              <div className="lot-title">{lot.title}</div>
              <div className="lot-price">Bid: {lot.price}$</div>
            </div>
            <div className="input-container">
              <button
                className={`lot-btn ${lot.isClosed ? 'disabled' : ''}`}
                onClick={() => handleLotClose(lot.id)}
                disabled={lot.isClosed}
              >
                {lot.isClosed ? 'Sold' : 'Close Lot'}
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No lots!</div>
      )}
    </div>
  );
};

export default Lots;