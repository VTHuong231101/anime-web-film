import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CommentBlock.css';

CommentBlock.propTypes = {

};

function CommentBlock(props) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className='comment__block'>
      <div className='d-flex'>
        <div className='user__avt--wrap'>
          <img className='user__avt--img' src='/user__avt.png' alt='' />
        </div>
        <p className='user__name'>UserName</p>
      </div>

      <p className='comment__content'>This is my favourite movie!</p>

      <div className='comment__interact d-flex'>
        <p className='comment__time'>01/11/2023</p>
        <i className="fa-solid fa-circle align-self-center"></i>
        <span class="like__icon fa-solid fa-thumbs-up align-self-center"></span>
        <p className='comment__like--number'>100</p>
        <i className="fa-solid fa-circle align-self-center"></i>
        <span
          className='comment__like'
          onClick={() => setIsLiked(!isLiked)}
        >{isLiked ? "Đã thích" : "Thích"}</span>
        <i className="fa-solid fa-circle align-self-center"></i>
        <a href='./' className='comment__ans'>Trả lời</a>
      </div>
    </div>
  );
}

export default CommentBlock;