import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="relative h-screen w-screen overflow-x-hidden bg-slate-900 text-white">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
