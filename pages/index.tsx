import SignInForm from '@components/SignInForm'
import style from './Home.module.scss'

const Home = () => {
  return (
    <div className={style['signin-container']}>
      <SignInForm />
    </div>
  )
}

export default Home
