import '../styles/globals.css'
import '../styles/main.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }) {
  const locale = Router.router?.locale
  console.log('locale in _app : ', locale)

  Router.events.on('routeChangeStart', url => {
    NProgress.start(url)
  })
  Router.events.on('routeChangeComplete', url => {
    NProgress.done(url)
  })

  return (
    <div className='u-container-1400 u-mx-auto'>
      <Component {...pageProps} />
    </div>
  )
}

export default appWithTranslation(MyApp, nextI18NextConfig)
