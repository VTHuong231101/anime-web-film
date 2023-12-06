import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

Pagination.propTypes = {

};

function Pagination(props) {
  return (
    <ul className='pagination d-flex'>
      <li className='page__item'>
        <a className='page__link' href='./categories'>Prev</a>
      </li>
      <li className='page__item actived'>
        <a className='page__link' href='./categories'>1</a>
      </li>
      <li className='page__item'>
        <a className='page__link' href='./categories'>2</a>
      </li>
      <li className='page__item'>
        <a className='page__link' href='./categories'>3</a>
      </li>
      <li className='page__item no--css'>
        <a className='page__link ' href='./categories'>...</a>
      </li>
      <li className='page__item'>
        <a className='page__link' href='./categories'>Next</a>
      </li>
    </ul>

  );
}

export default Pagination;