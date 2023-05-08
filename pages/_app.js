import "styles/bootstrap.min.css"
import "styles/post-page.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Script from "next/script"
import TagManager from "react-gtm-module"
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  useEffect(() => {

    TagManager.initialize({ gtmId: 'G-LNDBCZFX4Q' })
  })
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
