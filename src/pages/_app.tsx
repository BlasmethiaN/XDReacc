import '../../styles/globals.less'
import '../../styles/antd-custom.less'

import { AppProps } from 'next/app'
import { Helmet } from 'react-helmet'
import React from 'react'
import { SWRConfig } from 'swr'
import axios from 'axios'
import getConfig from 'next/config'

const API_URL = getConfig()?.publicRuntimeConfig?.API_URL as string
axios.defaults.baseURL = API_URL ?? 'http://localhost:4000'
axios.defaults.withCredentials = true

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Helmet>
        <title>XDanku</title>
      </Helmet>
      <SWRConfig
        value={{
          fetcher: (url) => axios(url).then((res) => res.data),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  )
}

export default MyApp
