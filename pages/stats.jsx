import { useEffect, useState } from 'react'
import axios from 'axios'

const Stats = () => {
  const [market, setMarket] = useState(0)
  const [marketChange, setMarketChange] = useState(0)
  const [volume, setVolume] = useState(0)
  const [volumeChange, setVolumeChange] = useState(0)
  const [price, setPrice] = useState(0)
  const [priceChange, setPriceChange] = useState(0)

  useEffect(() => {
    getSymbols()
  }, [])

  const getSymbols = async () => {
    try {
      const cmc = await axios.get('https://etc-cmc.herokuapp.com/') // change this url after deploying to vps

      setMarket(cmc.data.market.split('.')[0])
      setMarketChange(cmc.data.marketChange)

      setVolume(cmc.data.volume.split('.')[0])
      setVolumeChange(cmc.data.volumeChange)

      setPrice(cmc.data.price)
      setPriceChange(cmc.data.priceChange)
    } catch {
      console.log('Something went wrong!\n')
    }
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-20">
      <div className="my-10 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-emerald-500">Statistics for all collections</h1>

        {
          // ~ Stats for ETC
        }
        <div className="mt-10 flex w-full flex-col items-center justify-center rounded-xl bg-white p-4 font-medium text-emerald-500 sm:w-auto sm:flex-row">
          <div className="flex w-full flex-col items-center p-5 sm:w-48">
            <h2>ETC Market Cap</h2>
            <div className={`mt-1 rounded-xl px-2 py-1 text-white ${marketChange < 0 ? 'bg-red-500' : 'bg-green-500'}`}>
              {marketChange}%
            </div>
            <div className="mt-2 flex items-center text-black">
              <span className="text-xl">$</span>
              <p className="pt-0.5 pl-0.5">{market}</p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center border-t-2 p-5 sm:w-48 sm:border-l-2 sm:border-t-0">
            <h2>ETC Price</h2>
            <div className={`mt-1 rounded-xl px-2 py-1 text-white ${priceChange < 0 ? 'bg-red-500' : 'bg-green-500'}`}>
              {priceChange}%
            </div>
            <div className="mt-2 flex items-center text-black">
              <span className="text-xl">$</span>
              <p className="pt-0.5 pl-0.5">{price}</p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center border-t-2 p-5 sm:w-48 sm:border-l-2 sm:border-t-0">
            <h2>ETC 24h Volume</h2>
            <div className={`mt-1 rounded-xl px-2 py-1 text-white ${volumeChange < 0 ? 'bg-red-500' : 'bg-green-500'}`}>
              {volumeChange}%
            </div>
            <div className="mt-2 flex items-center text-black">
              <span className="text-xl">$</span>
              <p className="pt-0.5 pl-0.5">{volume}</p>
            </div>
          </div>
        </div>

        {
          // ~ Stats for collections
        }
      </div>
    </div>
  )
}

export default Stats
