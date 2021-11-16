import "../styles/globals.css"
import { sessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
