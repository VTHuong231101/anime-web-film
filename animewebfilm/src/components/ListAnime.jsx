import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ListAnime.css';

ListAnime.propTypes = {
};

function ListAnime({ data }) {
  return (
    <div className='anime col'>
      <div className='anime__img--container'>
        <label className='anime__rate d-flex rounded-pill'>
          <img
            className='rate__icon align-self-center'
            src='/star.png'
            alt=''
          />
          <span>{data.rate}</span>
        </label>

        <img
          className='anime__img rounded'
          src={data.thumbnail}
          alt=''
        />
      </div>

      <h5 className='anime__name'>
        {data.name}
      </h5>
    </div>

  );
}

export default ListAnime;