import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import { ThemeProvider } from '@mui/material'
import tema from '../src/components/Cabecalho/themes/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <div>
        <Cabecalho />
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
