import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { createGlobalStyle } from 'styled-components'
import { config as cfg, dom } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

cfg.autoAddCss = false
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={60}>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Lyon Formation Massage</title>
        <meta name="keywords" content="."></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
