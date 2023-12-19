import React, { useState } from 'react'
import loginbgimg from '../../assets/Background 5.4.svg'
import logoUnicon from '../../assets/Logo.png'
import './style.scss'
import { FcGoogle } from 'react-icons/fc'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Dashboard } from 'view/Dashbord'
import { Main } from 'commponest/Main'

export const LogInPage = () => {
  const [passwordType, setPasswodType] = useState('password')

  const onChengeTypeP = () => {
    if (passwordType === 'password') {
      setPasswodType('text')
    } else {
      setPasswodType('password')
    }
  }
  return (
    <div className='login-min'>
      <div className='loin-right'>
        <div className='text-left sign-in-right'>
          <Main />
          <h3>Sign In</h3>
          <p>Enter your email and password to sign in!</p>
          <span>
            <button>
              {' '}<FcGoogle />
              Sign in with Googsle
            </button>
          </span>
        </div>

        <span className='login-or'>
          <p />
          or
          <p />
        </span>

        <div className='login-from-input'>
          <label htmlFor='e-id1'>
            Email <b>*</b>
          </label>
          <input type='email' placeholder='exp@pm.com' id='e-id1' />
          <div className='input-pass'>
            <label htmlFor='p-id1'>
              Password <b>*</b>
            </label>
            <input
              type={passwordType}
              placeholder='Min. 8 characters'
              id='p-id1'
            />

            <div className='icon-of-eye' onClick={onChengeTypeP}>
              {passwordType === 'password' ? <BsEye /> : <BsEyeSlash />}
            </div>
          </div>
          <div className='login-keep'>
            <label htmlFor='keep'>
              <input type='checkbox' id='keep' />
              Keep me logged in
            </label>

            <p>For get password ?</p>
          </div>

          <button className='go-to-sing-in'>Sign in</button>

          {/* <button class=''>Read More</button> */}

          <div className='create-new-account'>
            <span>
              {' '}Not registered yet ? <p> Create an Account</p>
            </span>
          </div>
        </div>
      </div>
      <div className='lgin-left'>
        {/* <img src={loginbgimg} alt='Background' className='login-background' /> */}
        <img src={logoUnicon} alt='unicon' className='login-unicon' />
        <div className='login-left-about-web-side'>
          <p>Learn more about Pegasus UI on</p>
          <h3>figma.com/@lbayer10</h3>
        </div>
      </div>
    </div>
  )
}
