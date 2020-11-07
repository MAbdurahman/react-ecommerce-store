import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size }) => {
   return (
      <div className={`${size} menu-item`}>
         <div className="background-image zoom" style={{
            backgroundImage: `url(${imageUrl})`
         }} />
         <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">shop now</span>
         </div>
      </div>
   );
};

export default MenuItem;
