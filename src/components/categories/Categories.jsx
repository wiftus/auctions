import React from 'react';

import './categories.css';

const Categories = ({ onCategoryChange }) => {
   const categories = ['all', 'vehicles', 'phones', 'laptops'];

   return (
      <div className='categories'>
         <div className="categories-filters">
            {categories.map((category) => (
               <button
                  key={category}
                  className={`categories-filter ${category === 'all' ? 'active' : ''}`}
                  onClick={() => onCategoryChange(category)}
               >
                  {category}
               </button>
            ))}
         </div>
      </div>
   );
};

export default Categories;
