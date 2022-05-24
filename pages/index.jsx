/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const Hero = () => {
  const Showcase = ({ name, data }) => {
    return (
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-12">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-emerald-500 sm:text-4xl">{name}</h2>
          </div>
          <ul
            link="list"
            className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {data.map((collection) => (
              <Link href={`/collections/${collection.link}`} key={collection.name}>
                <li className="cursor-pointer">
                  <div className="space-y-4">
                    <img
                      className="aspect-[3/1] w-full rounded-lg object-cover object-center shadow-lg"
                      src={collection.image}
                      alt=""
                    />
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-center text-white">{collection.name}</h3>
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <>
      {
        // ~ Hero
      }
      <main className="mx-auto w-full  sm:mt-8 sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-[#0F766E]  mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-3xl font-semibold text-emerald-500 sm:text-4xl lg:text-5xl">
              Discover, Collect and Trade NFTs
            </h1>
            <h2 className="mt-4 text-center text-2xl font-medium text-white sm:text-3xl lg:text-4xl">
              ClassicArt is the first and largest fully-fledged NFT marketplace on Ethereum Classic.
            </h2>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-[#22C55E] bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
              >
                DISCOVER
              </a>
            </div>
          </div>
        </div>
      </main>

      {
        // ~ Stats
      }
      <div className="pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold text-emerald-500 sm:text-4xl">ClassicArt Stats</h2>
            <p className="mt-3 text-xl text-white sm:mt-4">
              ClassicArt is the most advanced NFT Marketplace built on Ethereum Classic
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 sm:pb-16">
          <div className="relative">
            <div className="relative mx-auto max-w-7xl px-10 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <dl className="rounded-lg bg-white pt-10 shadow-lg sm:grid sm:grid-cols-4">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center motion-safe:animate-bounce sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-base font-medium leading-6 text-gray-500">Daily Sales</dt>
                    <dd className="order-1 text-3xl font-semibold text-emerald-500 ">1</dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center motion-safe:animate-bounce sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-base font-medium leading-6 text-gray-500">Total Sales</dt>
                    <dd className="order-1 text-3xl font-semibold text-emerald-500 ">10</dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center motion-safe:animate-bounce sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-base font-medium leading-6 text-gray-500">Daily ETC volume</dt>
                    <dd className="order-1 text-3xl font-semibold text-emerald-500 ">11.7999</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center motion-safe:animate-bounce sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-base font-medium leading-6 text-gray-500">Total ETC volume</dt>
                    <dd className="order-1 text-3xl font-semibold text-emerald-500 ">11.8999</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        // ~ Collection Data
      }
      <Showcase name="Top Collections" data={topCollections} />

      <div className="mx-auto max-w-7xl bg-[#134E4A] py-12 px-4 sm:px-6 lg:px-8 lg:py-12 xl:rounded-xl">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-emerald-500 sm:text-4xl">Coming Soon</h2>
          </div>
          <ul
            link="list"
            className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {comingSoon.map((collection) => (
              <li key={collection.name}>
                <a href={`${collection.link}`}>
                  <div className="space-y-4">
                    <img
                      className="aspect-[3/1] w-full rounded-lg border-2 object-cover object-center shadow-lg"
                      src={collection.image}
                      alt=""
                    />
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-center text-white">{collection.name}</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Showcase name="New Collections" data={newCollections} />

      {
        // ~ Recent Purchases
      }

      <div className="mx-auto mb-12 max-w-7xl bg-slate-700 py-12 px-4 sm:px-6 lg:px-8 lg:py-12 xl:rounded-xl">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-emerald-500 sm:text-4xl">Recent Purchases</h2>
          </div>
          <ul
            link="list"
            className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {recentPurchases.map((collection) => (
              <li key={collection.name}>
                <a href={`${collection.name}`}>
                  <div className="relative space-y-4">
                    <div className="aspect-w-3 aspect-h-1 overflow-hidden rounded-3xl border-2">
                      <img className="object-cover shadow-lg" src={collection.image} alt="" />
                    </div>
                    <div className="absolute bottom-4 left-1/2 w-full -translate-x-1/2 space-y-2 bg-black bg-opacity-70 p-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="px-4 text-center text-white">{collection.name}</h3>
                        <h3 className="px-4 text-center text-white">Purchased by {collection.address}</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Hero

const topCollections = [
  {
    name: 'Classic Savages',
    link: 'ClassicSavages',
    image: 'https://cdn.discordapp.com/attachments/881344193316921398/973702347761012767/savteststst.jpg',
    contractAddress: '0x92c2230863a1773F27729971aDA931934d5c75b9',
  },
  {
    name: 'ETC BAYC',
    link: 'ETCBAYC',
    image: 'https://cdn.discordapp.com/attachments/961750363726282802/961753754410029076/classicapebackground.jpeg',
    contractAddress: '0x59E34EF31049565D041Aec6137F40f518c2D47c1',
  },
  {
    name: 'ETC PUNKS',
    link: 'ETCPUNKS',
    image: 'https://cdn.discordapp.com/attachments/881344193316921398/973704017752518676/punsksksks.jpg',
    contractAddress: '0x273Bc20299976Fb0BA58A991cb60a27E8Cdc8685',
  },
]

const comingSoon = [
  {
    name: 'ETC MAYC',
    link: 'https://classNameitter.com/etcbayc',
    image: 'https://cdn.discordapp.com/attachments/881344193316921398/973701095752880158/maycest.jpg',
    contractAddress: '0x69ACB3240cce53d6293619e6AF784Fdda777e45d',
  },
  {
    name: 'Classic Samurais',
    link: 'https://classNameitter.com/classicsamurais',
    image: 'https://cdn.discordapp.com/attachments/881344193316921398/973701810005114890/samuraitest.jpg',
  },
  {
    name: 'Monkey Doo',
    link: 'https://classNameitter.com/monkeydoo_nft',
    image: 'https://cdn.discordapp.com/attachments/881344193316921398/973703306092371968/monkeydooo.jpg',
  },
]

const newCollections = [
  {
    name: 'Classic Savages',
    image: 'https://cdn.discordapp.com/attachments/881344193316921398/973702347761012767/savteststst.jpg',
    contractAddress: '0x92c2230863a1773F27729971aDA931934d5c75b9',
  },
  {
    name: 'ETC BAYC',
    image: 'https://cdn.discordapp.com/attachments/961750363726282802/961753754410029076/classicapebackground.jpeg',
    contractAddress: '0x59E34EF31049565D041Aec6137F40f518c2D47c1',
  },
  {
    name: 'ETC PUNKS',
    image: 'https://cdn.discordapp.com/attachments/881344193316921398/973704017752518676/punsksksks.jpg',
    contractAddress: '0x273Bc20299976Fb0BA58A991cb60a27E8Cdc8685',
  },
]

const recentPurchases = [
  {
    id: '1',
    name: 'Lazy Lions #3780',
    address: '0xAddress',
    image: 'https://classicsavages.mypinata.cloud/ipfs/QmZ6byMqy6ejbkVZknYAvgcdZLzXwMerY9B63QXbQhFBJP/3780.png',
  },
  {
    id: '2',
    name: 'Lazy Lions #1483',
    address: '0xAddress',
    image: 'https://classicsavages.mypinata.cloud/ipfs/QmZ6byMqy6ejbkVZknYAvgcdZLzXwMerY9B63QXbQhFBJP/1483.png',
  },
]
