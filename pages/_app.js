import '../styles/globals.css'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`)
    NProgress.start()
  })
  Router.events.on('routeChangeComplete', url => {
    console.log(`Loaded: ${url}`)
    NProgress.done()
  })

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
          integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=='
          // eslint-disable-next-line react/no-unknown-property
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
