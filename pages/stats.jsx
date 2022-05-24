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

        <div className="mt-10 flex rounded-xl bg-white p-4 font-medium text-emerald-500">
          <div className="flex flex-col items-center p-4">
            <h2>ETC Market Cap</h2>
            <div className="mt-2 flex items-center text-black">
              <span className="text-xl">$</span>
              <p className="pt-0.5 pl-0.5">{market}</p>
            </div>
          </div>
          <div className="flex flex-col items-center border-l-2 p-4">
            <h2>ETC Price</h2>
            <div className="mt-2 flex items-center text-black">
              <span className="text-xl">$</span>
              <p className="pt-0.5 pl-0.5">{price}</p>
            </div>
          </div>
          <div className="flex flex-col items-center border-l-2 p-4">
            <h2>ETC 24h Volume</h2>
            <div className="mt-2 flex items-center text-black">
              <span className="text-xl">$</span>
              <p className="pt-0.5 pl-0.5">{volume}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
