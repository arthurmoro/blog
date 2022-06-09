import "../styles/globals.css"
import Header from "../Components/Header"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="max-w-5xl">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
