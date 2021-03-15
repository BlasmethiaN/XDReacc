import '../styles/globals.less'
import '../styles/antd-custom.less'

import { AppProps } from 'next/app'
import { Helmet } from 'react-helmet'
import React from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Helmet>
        <title>nextJSin</title>
      </Helmet>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
