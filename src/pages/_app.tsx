import '../../styles/globals.less'
import '../../styles/antd-custom.less'

import { AppProps } from 'next/app'
import { Helmet } from 'react-helmet'
import React from 'react'
import { SWRConfig } from 'swr'
import axios from 'axios'

axios.defaults.baseURL = process.env.API_URL ?? 'http://localhost:4000'
axios.defaults.withCredentials = true

console.log(process.env.API_URL)

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
