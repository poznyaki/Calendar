import React from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.scss'

function RegisterPage(props) {
  return (
    <div className={style.wrapper}>
        <h1>Register</h1>
        <form>
            <label htmlFor="login">Login</label>
            <input type="text" id="login" />
            <span></span>
            <br />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <span></span>
            <br />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <span></span>
            <br />

            <label htmlFor="confirmPassword">Confirm password</label>
            <input type="password" id="confirmPassword" />
            <span></span>
            <br />
            <button className={style.button}>Register</button>
        </form>
    </div>
  )
}

RegisterPage.PropTypes = {};

export default RegisterPage;