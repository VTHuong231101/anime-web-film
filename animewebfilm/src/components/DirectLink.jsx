import React from 'react';
import { Link } from 'react-router-dom';
import './DirectLink.css';

DirectLink.propTypes = {

};

function DirectLink(props) {
  return (
    <div className='direct__link'>
      <i className="fa-solid fa-house-chimney direct__link--homeicon"></i>
      <Link className='direct__link--item' to='/'>Home</Link>
      <i className="fa-solid fa-greater-than direct__link--icon"></i>
      <Link className='direct__link--item' to='/categories'>Categories</Link>
      <i className="fa-solid fa-greater-than direct__link--icon"></i>
      <span>Romance</span>
    </div>
  );
}

export default DirectLink;