import '../styles/globals.css'
import '../styles/main.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'
import { Suspense, useEffect } from 'react'

import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Spinner from '../components/common/spinner'
import { wrapper } from '../redux/store'
import { useDispatch } from 'react-redux'
import useJwt from '../jwt/jwtService'
import jwt_decode from 'jwt-decode'
import { SET_IS_ACCOUNT_TRUE, SET_LOGGED_IN_USER, USER_LOGGED_IN_SUCCESS } from '../redux/action/actionTypes/customer'

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (useJwt.getToken()) {
      const token = useJwt.getToken()
      const decode = jwt_decode(token)
      dispatch({ type: SET_LOGGED_IN_USER, payload: decode })
      dispatch({ type: USER_LOGGED_IN_SUCCESS, payload: decode })
    }

    if (localStorage.getItem('isRegistered')) dispatch({ type: SET_IS_ACCOUNT_TRUE })
  }, [])

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
