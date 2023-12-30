import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Register.css';

Register.propTypes = {

};

function Register(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const passwordInput = document.querySelector('.register__password');
  const confirmInput = document.querySelector('.register__confirmpassword');

  function handleUserName(e) {
    setName(e.target.value);
  }
  function handleUserEmail(e) {
    setEmail(e.target.value);
  }
  function handleUserPassword(e) {
    setPassword(e.target.value);
  }

  let userInfor = {
    name: '',
    email: '',
    password: ''
  }
  function handleRegister() {
    if (password === confirmInput.value) {
      userInfor = { name, email, password };
      console.log(userInfor)
    }
    else {
      const notice = document.querySelector('.notice');
      notice.innerHTML = 'Password is not match! Please confirm your password again!';
      notice.classList.add('text-danger');
    }
  }



  return (
    <div className='register position-relative'>
      <div className='register__block position-absolute container-fluid'>
        <div className='row register__row'>
          <div className='col-6'></div>
          <div className='col-6 register__main'>
            <div className='register__form'>
              <h3>Register</h3>
              <div className='name__input d-flex'>
                <i className="input__icon fa-solid fa-user"></i>
                <input
                  className='register__input register__name d-block'
                  type='text'
                  placeholder='Name'
                  onChange={handleUserName}
                />
              </div>
              <div className='email__input d-flex'>
                <i className="input__icon fa-solid fa-envelope"></i>
                <input
                  className='register__input register__email d-block'
                  type='email'
                  placeholder='Email address'
                  onChange={handleUserEmail} />
              </div>
              <div className='password__input d-flex'>
                <i className="input__icon fa-solid fa-lock"></i>
                <input
                  className='register__input register__password d-block'
                  type='password'
                  placeholder='Password'
                  onChange={handleUserPassword}
                />
              </div>
              <div className='password__input d-flex'>
                <i className="input__icon fa-solid fa-lock"></i>
                <input className='register__input register__confirmpassword d-block' type='password' placeholder='Confirm Password' />
              </div>
              <span className='notice text-white mt-2'></span>

              <div className='form__handle d-flex justify-content-between '>
                <button className='create-account' onClick={handleRegister}>Create Account</button>
              </div>

              <Link className='link__login' to='/login'>have an account? Login now!</Link>

              <div className='register-by-social'>
                <button className='by__facebook d-block w-100'>
                  <i className="fa-brands fa-facebook-f"></i>
                  Facebook
                </button>
                <button className='by__google d-block w-100'>
                  <i className="fa-brands fa-google"></i>
                  Google
                </button>
                <button className='by__twitter d-block w-100'>
                  <i className="fa-brands fa-twitter"></i>
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