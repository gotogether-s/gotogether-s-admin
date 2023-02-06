import HeadInfo from '@components/HeadInfo'
import SignInForm from '@components/SignInForm'
import style from './Home.module.scss'

const Home = () => {
  return (
    <>
      <HeadInfo title='상품 추가' />
      <div className={style['signin-container']}>
        <SignInForm />
      </div>
    </>
  )
}

export default Home
