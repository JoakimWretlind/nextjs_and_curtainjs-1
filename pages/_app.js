import React from "react"
React.useLayoutEffect = React.useEffect
import { useLayoutEffect } from 'react'
import { GlobalStyle } from '../styles/globalStyle'

function MyApp({ Component, pageProps }) {
  useLayoutEffect(() => {
    console.log("layout effect");
  })
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
