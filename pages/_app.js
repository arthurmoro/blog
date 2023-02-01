import "styles/globals.css"
import "styles/post-page.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LNDBCZFX4Q" />
      <Script
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
