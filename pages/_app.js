import '../styles/globals.css'
import '../styles/main.css'
import Router from 'next/router'
import NProgress from 'nprogress'

// import './I18N/i18next'
import { useTranslation, I18nextProvider } from 'react-i18next'

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
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </div>
  )
}

export default MyApp
