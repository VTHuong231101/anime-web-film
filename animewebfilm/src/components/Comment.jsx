import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

Comment.propTypes = {

};

function Comment({ avt, time, name, comment, level }) {
  return (
    <div className={`topic__comment--block d-flex lv-${level}`}>
      <img className='comment__avt' src={avt} alt='' />
      <div className='comment__details'>
        <div className='comment__time'>{time}</div>
        <h4 className='comment__user-name text-white'>{name}</h4>
        <p className='comment__content'>{comment}</p>
        <div className='comment__act mt-0 d-flex'>
          <span className='d-flex'>
            <i className="like__icon fa-solid fa-thumbs-up align-self-center"></i>
            <p className='comment__like--number'>100</p>
          </span>
          <span className='like'>Like</span>
          <span className='ans'>Reply</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;