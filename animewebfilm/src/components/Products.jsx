import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Products.css';
import ListAnime from './ListAnime';
import { sortBy, orderBy } from 'lodash';


Products.propTypes = {
};

function Products({ title, data, modifier }) {
  const AtoZdata = sortBy(data, ['name', 'views']);
  const ZtoAdata = orderBy(data, ['name', 'views'], 'desc');
  const viewData = sortBy(data, ['views']);
  const rateData = sortBy(data, ['rate']);

  // const [filter, setFilter] = useState('A to Z');
  const [selected, setSelected] = useState(0);

  const filterList = ['A-Z', 'Z-A', 'By view', 'By rate'];


  let movieData = []
  if (selected === 0)
    movieData = AtoZdata;
  else if (selected === 1)
    movieData = ZtoAdata;
  else if (selected === 2)
    movieData = viewData;
  else movieData = rateData;

  function handleClick(id) {
    setSelected(id);
  }
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
            <span className='filter__option'>{filterList[selected]}</span>
            <i className="fa-solid fa-angle-down"></i>

            <ul className='filter__list'>

            </ul>
          </div>
        </div>)}
      </div>

      <div className='row'>
        {movieData.map((item) => (<ListAnime key={item.id} data={item} />))}
      </div>
    </div>
  );
}

export default Products;