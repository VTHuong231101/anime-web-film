import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Products.css';
import ListAnime from './ListAnime';
import trendingApi from '../api/trendingApi';


Products.propTypes = {
};

function Products({ title, data, modifier }) {


  return (
    <div
      className='products__list text-uppercase text-white justify-content-between container-fluid'
    >
      <div className='products__description d-flex justify-content-between'>
        <h4 className='description__title'>
          {title}
        </h4>
        {modifier === 'view all' ? (<h5 className='description__direct d-flex'>
          {modifier}
          <img className='products__view--icon' src='/right-arrow.png' alt='' />
        </h5>) : (<div className='d-flex'>
          <p className='description__filter'>Order by:</p>
          <div className='filter'>
            <span className='filter__option'>A-Z</span>
            <i className="fa-solid fa-angle-down"></i>
            <ul className='filter__list '>
              <li>Z-A</li>
              <li>By view</li>
              <li>By rate</li>
            </ul>
          </div>
        </div>)}
      </div>

      <div className='row'>
        {data.map((item) => (<ListAnime key={item.id} data={item} />))}
      </div>
    </div>
  );
}

export default Products;