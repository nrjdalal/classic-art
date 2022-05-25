import '../styles/globals.css'
import Nav from 'components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="relative h-screen w-screen overflow-x-hidden bg-slate-900 font-dmSans leading-6 tracking-wide text-white">
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
