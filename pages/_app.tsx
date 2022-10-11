import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@styles/theme'
import { Provider } from 'react-redux'
import store from 'store'
import Layout from '@components/Layout'
import '@styles/reset.css'
import '@styles/muiOverride.scss'
import '@styles/globals.scss'
import '@styles/editor/Editor.css'
import '@styles/editor/ColorPicker.css'
import '@styles/editor/Image.css'
import '@styles/editor/Link.css'
import '@styles/editor/Table.css'
import '@styles/editor/Video.css'
import '@styles/editor/Toolbar.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
