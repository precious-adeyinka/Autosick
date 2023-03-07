import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux'
import globalStore from '../redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={globalStore}>
      <Component {...pageProps} />
    </Provider>
  )
}
