import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

Footer.propTypes = {

};

function Footer(props) {
  const [isAppear, setIsAppear] = useState(false);

  useEffect(() => {
    // Hàm này sẽ chạy mỗi khi có sự thay đổi trong window.scrollY
    const handleScroll = () => {
      if (window.scrollY >= 1200)
        setIsAppear(true);
      else setIsAppear(false);
    };

    // Thêm event listener cho sự kiện scroll
    window.addEventListener('scroll', handleScroll);

    // Hàm này sẽ chạy khi component bị unmount để clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  function scrollOnTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return (
    <div className='footer__block'>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className="footer__logo col-4">
              <a href="./index.html">
                <img src="/logo.png" alt="" />
              </a>
              <p>Hope you have relax time in my website! If you have any feedback, please contact with me!</p>
            </div>

            <div className='footer__contacts col-4'>
              <h4 className='contact__title'>Contacts</h4>
              <ul className='contact__list'>
                <li className='contact__facebook'>
                  <a href='./'>
                    <i className="fa-brands fa-facebook-f"></i>
                    Facebook
                  </a>
                </li>
                <li className='contact__instagram'>
                  <a href='./'>
                    <i className="fa-brands fa-instagram"></i>
                    Instagram
                  </a>
                </li>
                <li className='contact__twitter'>
                  <a href='./'>
                    <i className="fa-brands fa-twitter"></i>
                    Twitter
                  </a>
                </li>

              </ul>
            </div>

            <div className='footer__infor col-4'>
              <h4>To receive the newest notifications</h4>
              <input className='footer__name' type='text' placeholder='Name...'></input>
              <input className='footer__email' type='email' placeholder='Email...'></input>
              <button className='footer__submit'>Submit</button>
            </div>
          </div>
        </div>
      </footer>


      <button
        className='scroll-on-top'
        style={{ display: isAppear ? 'block' : 'none' }}
        onClick={() => scrollOnTop()}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Footer;