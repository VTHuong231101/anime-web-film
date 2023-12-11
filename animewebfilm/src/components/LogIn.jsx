import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './LogIn.css';
import { Link } from 'react-router-dom';
import { set } from 'react-hook-form';

LogIn.propTypes = {

};

function LogIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handeUserEmail(e) {
    setEmail(e.target.value);
  }
  function handeUserPassword(e) {
    setPassword(e.target.value);
  }
  let userInfor = {
    email: '',
    password: ''
  }
  useEffect(() => {
    if (email && password)
      userInfor = { email, password };
  }, [email, password])


  function handleLogin() {
    if (userInfor.email && userInfor.password) {
      // compare with user infor database and handle
    }
  }

  return (
    <div className='login position-relative'>
      <div className='login__block position-absolute container-fluid'>
        <div className='row login__row'>
          <div className='col-6'></div>
          <div className='col-6 login__main'>
            <div className='login__form'>
              <h3>Login</h3>

              <div className='email__input d-flex'>
                <i className="input__icon fa-solid fa-envelope"></i>
                <input className='login__input d-block' onChange={handeUserEmail} type='email' placeholder='Email address' />
              </div>

              <div className='password__input d-flex'>
                <i className="input__icon fa-solid fa-lock"></i>
                <input className='login__input d-block' onChange={handeUserPassword} type='password' placeholder='Password' />
              </div>

              <div className='form__handle d-flex justify-content-between '>
                <button onClick={handleLogin} className='submit'>Login now</button>
                <button className='forget'>Forgot your password?</button>
              </div>


              <Link className='link__register' to='/register'>Don't have an account? Register now!</Link>

              <div className='login-by-social'>
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

export default LogIn;