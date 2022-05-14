import '../styles/globals.css'
import '../styles/main.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'
import { Suspense } from 'react'

import dynamic from 'next/dynamic'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Spinner from '../components/common/spinner'
import { wrapper } from '../redux/store'

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
    <ErrorBoundary fallback={'ErrorFallback'}>
      <Suspense fallback={<Spinner />}>
        <div className='u-container-1400 u-mx-auto'>
          <Component {...pageProps} />
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}

export default appWithTranslation(wrapper.withRedux(MyApp), nextI18NextConfig)
