import "/styles/globals.css"
import "/styles/post-page.css"
import Header from "/Components/Header"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="max-w-7xl my-0 mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
