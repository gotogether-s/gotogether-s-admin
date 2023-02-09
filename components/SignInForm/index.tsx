import HeadInfo from '@components/HeadInfo'
import { Button, TextField } from '@mui/material'
import en from '@public/locales/en/signInForm.json'
import ko from '@public/locales/ko/signInForm.json'
import logo from '@public/main_logo.svg'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import style from './SignInForm.module.scss'

const regex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

const SignInForm = () => {
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const [signInValues, setSignInValues] = useState({
    email: '',
    password: '',
  })
  const [signInValuesErrors, setSignInValuesErrors] = useState({})
  const [displaySignInError, setDisplaySignInError] = useState(false)

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
      errors.email = translate['에러: 이메일을 입력해주세요']
    } else if (!regex.test(signInValues.email)) {
      errors.email = translate['올바른 이메일 형식이 아닙니다!']
    }
    if (!values.password) {
      errors.password = translate['에러: 비밀번호를 입력해주세요']
    }
    return errors
  }

  const requestSignIn = async e => {
    e.preventDefault()
    const signInValidation = validateSignIn(signInValues)

    if (signInValidation.email || signInValidation.password) {
      setSignInValuesErrors(validateSignIn(signInValues))
      setDisplaySignInError(false)
      return
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVICE_API_URL}/login`,
        signInValues
      )
      const { accessToken } = res.data.data
      window.localStorage.setItem('accessToken', accessToken)
      router.push('/addproduct')
    } catch (e) {
      console.log(e)
      setSignInValuesErrors(validateSignIn(signInValues))
      setDisplaySignInError(true)
    }
  }

  return (
    <>
      <HeadInfo title={translate['페이지 제목']} />
      <div className={style['signinform-container']}>
        <Image
          src={logo}
          alt='logo'
          width='100%'
          height='12%'
          layout='responsive'
          objectFit='contain'
        />
        <p className={style['intro']}>
          {translate['관리자 계정으로 로그인해주세요']}
        </p>
        <form onSubmit={requestSignIn}>
          <div className={style['input-wrapper']}>
            <div className={style['label']}>{translate['이메일']}</div>
            <TextField
              name='email'
              size='small'
              placeholder={translate['이메일을 입력해주세요']}
              value={signInValues.email}
              sx={{ width: '100%' }}
              onChange={handleSignInValuesChange}
              onBlur={removeInputSpaces}
              autoComplete='off'
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
            <div className={style['label']}>{translate['비밀번호']}</div>
            <TextField
              name='password'
              type='password'
              size='small'
              placeholder={translate['비밀번호를 입력해주세요']}
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
              sx={{
                width: '100%',
                backgroundColor: '#4581F8',
                boxShadow: 'none',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                fontWeight: '500',
                '&:hover': {
                  backgroundColor: '#4581F8',
                  boxShadow: 'none',
                },
              }}>
              {translate['로그인']}
            </Button>
            <p
              className={style['error-message']}
              style={{ visibility: displaySignInError ? 'visible' : 'hidden' }}>
              {translate['계정이 존재하지 않거나 올바른 비밀번호가 아닙니다']}
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignInForm
