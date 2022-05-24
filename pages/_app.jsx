import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="relative w-screen overflow-x-hidden">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
