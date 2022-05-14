/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Layout from '../components/layout/Layout'
import { useTranslation, Trans } from 'next-i18next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function about() {
  const { t } = useTranslation('second-page')

  return (
    <>
      <Layout title='Second Page'>
        <Trans i18nKey={t('title')} />
        <h1>{t('h1')}</h1>
      </Layout>
    </>
  )
}

export default about

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['second-page']))
    }
  }
}
