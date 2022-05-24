/* eslint-disable @next/next/no-img-element */

const Hero = () => {
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
    </>
  )
}

export default Hero
