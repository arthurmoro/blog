import "styles/bootstrap.min.css"
import "styles/post-page.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import TagManager from "react-gtm-module"
import { useEffect } from "react"
import "../components/Posts/PostCard.css"
import "../components/Posts/PostsCenteredList.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {

    TagManager.initialize({ gtmId: 'G-LNDBCZFX4Q' })
  })
  return (
    <>
      <Header />
      <Component style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }} {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
