import { TextField, Button } from '@mui/material'
import { useState } from 'react'
import Image from 'next/image'
import logo from '@assets/image/logo.png'
import Link from 'next/link'
import style from './SignInForm.module.scss'

const regex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

const SignInForm = () => {
  const [signInValues, setSignInValues] = useState({
    email: '',
    password: '',
  })
  const [signInValuesErrors, setSignInValuesErrors] = useState({})

  const handleSignInValuesChange = e => {
    const { name, value } = e.target
    setSignInValues({ ...signInValues, [name]: value })
  }

  const removeInputSpaces = e => {
    const { name, value } = e.target
    setSignInValues({
      ...signInValues,
      [name]: value.trim().replace(/\s/g, ''),
    })
  }

  const validateSignIn = values => {
    const errors = {}
    if (!values.email) {
      errors.email = '이메일을 입력해주세요!'
    } else if (!regex.test(signInValues.email)) {
      errors.email = '올바른 이메일 형식이 아닙니다!'
    }
    if (!values.password) {
      errors.password = '비밀번호를 입력해주세요!'
    }
    return errors
  }

  const requestSignIn = e => {
    e.preventDefault()
    setSignInValuesErrors(validateSignIn(signInValues))
  }

  return (
    <div className={style['signinform-container']}>
      <Image
        src={logo}
        alt='logo'
        width='100%'
        height='12%'
        layout='responsive'
        objectFit='contain'
      />
      <p className={style['intro']}>관리자 계정으로 로그인해주세요</p>
      <form onSubmit={requestSignIn}>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>이메일</div>
          <TextField
            name='email'
            size='small'
            placeholder='이메일을 입력해주세요'
            value={signInValues.email}
            sx={{ width: '100%' }}
            onChange={handleSignInValuesChange}
            onBlur={removeInputSpaces}
          />
          <p
            style={{
              visibility: signInValuesErrors.email ? 'visible' : 'hidden',
            }}
            className={style['error-message']}>
            {signInValuesErrors.email}
          </p>
        </div>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>비밀번호</div>
          <TextField
            name='password'
            size='small'
            placeholder='비밀번호를 입력해주세요'
            value={signInValues.password}
            sx={{ width: '100%' }}
            onChange={handleSignInValuesChange}
            onBlur={removeInputSpaces}
          />
          <p
            style={{
              visibility: signInValuesErrors.password ? 'visible' : 'hidden',
            }}
            className={style['error-message']}>
            {signInValuesErrors.password}
          </p>
        </div>
        <div className={style['button-wrapper']}>
          <Button
            variant='contained'
            type='submit'
            sx={{ width: '100%' }}>
            로그인
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
