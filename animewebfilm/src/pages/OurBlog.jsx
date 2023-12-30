import React from 'react';
import PropTypes from 'prop-types';
import './OurBlog.css';
import Comment from '../components/Comment';

OurBlog.propTypes = {

};

function OurBlog(props) {
  return (
    <div className='container-fluid'>
      <div className='blog__banner'>
        <img className='banner__img' src='/slidebar__imgs/tv-5.jpg' alt='' />
        <div className='banner__text'>
          <h3>Our Blog</h3>
          <h5>Welcome to official Anime Blog</h5>
        </div>
      </div>
      <div className='blog__topic row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <div className='topic row'>
            <div className='topic__problem'>
              <h3 className='topic__title'>Tobio-Nishinoya showdown</h3>
              <img
                className='topic__img w-100'
                src='/bd-item-1.jpg'
                alt='' />
              <p className='topic__content'>
                In Japan the idea of a first-year speaking to a senior the way Kageyama did to Asahi is a lot more shocking than it would be in the West, but Tobio calling out teammates in genuinely rude fashion in the middle of a match is what got him isolated in the first place.  It’s better for the Crows to sort this out in practice matches than the real deal, but this is really on Tobio – he has to figure out how to co-exist with others in a team environment.
              </p>
            </div>

            <div className='topic__comments'>
              <h4 className='comments__quantity'>3 Comments</h4>
              <Comment
                avt="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
                time="Dec 01, 2023"
                name="Alice"
                comment="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi"
                level="1"
              />
              <Comment
                avt="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
                time="Dec 01, 2023"
                name="Alice"
                comment="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi"
                level="2"
              />
              <Comment
                avt="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
                time="Dec 01, 2023"
                name="Alice"
                comment="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi"
                level="1"
              />
            </div>
          </div>
          <div className='topic row'>
            <div className='topic__problem'>
              <h3 className='topic__title'>Tobio-Nishinoya showdown</h3>
              <img
                className='topic__img w-100'
                src='/bd-item-1.jpg'
                alt='' />
              <p className='topic__content'>
                In Japan the idea of a first-year speaking to a senior the way Kageyama did to Asahi is a lot more shocking than it would be in the West, but Tobio calling out teammates in genuinely rude fashion in the middle of a match is what got him isolated in the first place.  It’s better for the Crows to sort this out in practice matches than the real deal, but this is really on Tobio – he has to figure out how to co-exist with others in a team environment.
              </p>
            </div>

            <div className='topic__comments'>
              <h4 className='comments__quantity'>3 Comments</h4>
              <Comment
                avt="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
                time="Dec 01, 2023"
                name="Alice"
                comment="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi"
                level="1"
              />
              <Comment
                avt="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
                time="Dec 01, 2023"
                name="Alice"
                comment="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi"
                level="2"
              />

              <Comment
                avt="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
                time="Dec 01, 2023"
                name="Alice"
                comment="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi"
                level="1"
              />
            </div>
          </div>
        </div>
        <div className='col-3'></div>
      </div>

    </div>
  );
}

export default OurBlog;