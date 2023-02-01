import "styles/globals.css"
import "styles/post-page.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-LNDBCZFX4Q" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{

          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LNDBCZFX4Q');
          `
        }} />
      <Header />
      <main className="max-w-7xl my-0 mx-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
