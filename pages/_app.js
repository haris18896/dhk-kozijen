import '../styles/globals.css'
import '../styles/main.css'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'

// import './I18N/i18next'
import { useTranslation, I18nextProvider } from 'react-i18next'
import { useEffect } from 'react'

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }) {
  const locale = Router.router?.locale
  console.log('locale in _app : ', locale)
  const { i18n } = useTranslation()

  Router.events.on('routeChangeStart', url => {
    NProgress.start(url)
  })
  Router.events.on('routeChangeComplete', url => {
    NProgress.done(url)
  })

  return (
    <div className='u-container-1400 u-mx-auto'>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
          integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </Head>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </div>
  )
}

export default MyApp
