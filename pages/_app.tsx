import type { AppProps } from 'next/app'
import 'styles/reset.css'
import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
