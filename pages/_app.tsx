import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@styles/theme'
import Layout from '@components/Layout'
import SideBar from '@components/SideBar'
import '@styles/reset.css'
import '@styles/muiOverride.scss'
import '@styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <SideBar />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
