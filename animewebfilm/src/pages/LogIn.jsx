import React from 'react';
import PropTypes from 'prop-types';
import './LogIn.css';
import { Link } from 'react-router-dom';

LogIn.propTypes = {

};

function LogIn(props) {
  return (
    <div className='login position-relative'>
      <div className='login__block position-absolute container-fluid'>
        <div className='row login__row'>
          <div className='col-6'></div>
          <div className='col-6 login__main'>
            <div className='login__form'>
              <h3>Login</h3>
              <div className='email__input d-flex'>
                <i class="input__icon fa-solid fa-envelope"></i>
                <input className='login__input d-block' type='email' placeholder='Email address' />
              </div>
              <div className='password__input d-flex'>
                <i class="input__icon fa-solid fa-lock"></i>
                <input className='login__input d-block' type='password' placeholder='Password' />
              </div>

              <div className='form__handle d-flex justify-content-between '>
                <button className='submit'>Login now</button>
                <button className='forget'>Forgot your password?</button>
              </div>

              <Link className='link__register' to='/register'>Don't have an account? Register now!</Link>

              <div className='login-by-social'>
                <button className='by__facebook d-block w-100'>
                  <i class="fa-brands fa-facebook-f"></i>
                  Facebook
                </button>
                <button className='by__google d-block w-100'>
                  <i class="fa-brands fa-google"></i>
                  Google
                </button>
                <button className='by__twitter d-block w-100'>
                  <i class="fa-brands fa-twitter"></i>
                  Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className='background__img w-100'
        src='https://img5.thuthuatphanmem.vn/uploads/2021/12/28/anh-background-anime-buon_030340869.jpg'
        alt='' />
    </div>
  );
}

export default LogIn;