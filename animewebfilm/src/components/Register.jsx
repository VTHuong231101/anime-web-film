import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Register.css';

Register.propTypes = {

};

function Register(props) {
  return (
    <div className='register position-relative'>
      <div className='register__block position-absolute container-fluid'>
        <div className='row register__row'>
          <div className='col-6'></div>
          <div className='col-6 register__main'>
            <div className='register__form'>
              <h3>Register</h3>
              <div className='name__input d-flex'>
                <i class="input__icon fa-solid fa-user"></i>
                <input className='register__input d-block' type='text' placeholder='Name' />
              </div>
              <div className='email__input d-flex'>
                <i class="input__icon fa-solid fa-envelope"></i>
                <input className='register__input d-block' type='email' placeholder='Email address' />
              </div>
              <div className='password__input d-flex'>
                <i class="input__icon fa-solid fa-lock"></i>
                <input className='register__input d-block' type='password' placeholder='Password' />
              </div>
              <div className='password__input d-flex'>
                <i class="input__icon fa-solid fa-lock"></i>
                <input className='register__input d-block' type='password' placeholder='Confirm Password' />
              </div>

              <div className='form__handle d-flex justify-content-between '>
                <button className='create-account'>Create Account</button>
              </div>

              <Link className='link__login' to='/login'>have an account? Login now!</Link>

              <div className='register-by-social'>
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

export default Register;