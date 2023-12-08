import React from 'react';
import PropTypes from 'prop-types';
import './TopView.css';

TopView.propTypes = {

};

function TopView({ data }) {
  const filterItems = document.querySelectorAll('.header__filter li');
  function addActiveClass(e) {
    filterItems.forEach((item) => item.classList.remove('active'))
    e.target.classList.add('active');
  }
  function AnimeItem({ data }) {
    return (
      <div className='item__block'>
        <img className='w-100 rounded'
          src={data.thumbnail}
          alt='' />
        <h5>{data.name}</h5>
        <p>{data.views} views</p>
      </div>
    )
  }
  return (
    <div className='topview__block'>
      <div className='banner__header d-flex justify-content-between'>
        <h5 className='header__title'>Top View</h5>
        <ul className='header__filter d-flex'>
          <li className='filter__active' onClick={(e) => addActiveClass(e)}>Day</li>
          <li onClick={(e) => addActiveClass(e)}>Week</li>
          <li onClick={(e) => addActiveClass(e)}>Month</li>
          <li onClick={(e) => addActiveClass(e)}>Year</li>
        </ul>
      </div>
      <div>
        {data.map((item) => (<AnimeItem key={item.id} data={item} />))}
      </div>
    </div>
  );
}

export default TopView;