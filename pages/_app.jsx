import '../styles/globals.css'
import Nav from 'components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="font-dmSans relative h-screen w-screen overflow-x-hidden bg-slate-900 leading-5 text-white">
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
