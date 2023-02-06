import { ThemeProvider } from '@mui/material/styles'
import '@styles/editor/ColorPicker.css'
import '@styles/editor/Editor.css'
import '@styles/editor/Image.css'
import '@styles/editor/Link.css'
import '@styles/editor/Table.css'
import '@styles/editor/Toolbar.css'
import '@styles/editor/Video.css'
import '@styles/globals.scss'
import '@styles/muiOverride.scss'
import '@styles/reset.css'
import theme from '@styles/theme'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from 'store'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
