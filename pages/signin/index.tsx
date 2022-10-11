import SignInForm from '@components/SignInForm'
import style from './SignIn.module.scss'

const SignIn = () => {
  return (
    <div className={style['signin-container']}>
      <SignInForm />
    </div>
  )
}

export default SignIn
