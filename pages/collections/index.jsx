/* eslint-disable @next/next/no-img-element */
const Index = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-20">
      <div className="my-10 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-emerald-500">Top collections in 7 days</h1>
      </div>
      {
        // ~ Top Collections
      }
      <div className="grid items-center justify-center  gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TopCollections.map((collection, key) => (
          <div className="relative mx-2 flex w-80 items-center gap-4 rounded-2xl bg-slate-700 p-4 sm:w-auto" key={key}>
            <div className="absolute top-3 left-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-emerald-500 bg-white text-black">
              {key + 1}
            </div>
            <img className="rounded-full" src={collection.image} alt="" />
            <h2>{collection.name}</h2>
          </div>
        ))}
      </div>
      {
        // ~
      }
      <div className="my-10 mt-20 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-emerald-500">All collections</h1>
      </div>
    </div>
  )
}

export default Index

const TopCollections = [
  {
    name: 'ClassicSavages',
    image:
      'https://classicart.io/_next/image?url=https%3A%2F%2Fmedia.discordapp.net%2Fattachments%2F966074148344451192%2F974474945537122304%2F5.jpeg%3Fwidth%3D936%26height%3D936&w=64&q=75',
    link: '/',
  },
  {
    name: 'ClassicSavages',
    image:
      'https://classicart.io/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F881344193316921398%2F937796000293216326%2FLLLogo_copy.png&w=64&q=75',
    link: '/',
  },
  {
    name: 'ClassicSavages',
    image:
      'https://classicart.io/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F881344193316921398%2F937796568172621874%2FIfhWwr5G_400x400.jpg&w=64&q=75',
    link: '/',
  },
  {
    name: 'ClassicSavages',
    image:
      'https://classicart.io/_next/image?url=https%3A%2F%2Fmedia.discordapp.net%2Fattachments%2F966074148344451192%2F974732510472863794%2FMAYClogo.jpeg&w=64&q=75',
    link: '/',
  },
  {
    name: 'ClassicSavages',
    image:
      'https://classicart.io/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F881344193316921398%2F937796758929539152%2FXL2px6iw_400x400.jpg&w=64&q=75',
    link: '/',
  },
  {
    name: 'ClassicSavages',
    image:
      'https://classicart.io/_next/image?url=https%3A%2F%2Fmedia.discordapp.net%2Fattachments%2F966074148344451192%2F973653292917854219%2Fmoonlamalogo.jpeg&w=64&q=75',
    link: '/',
  },
  {
    name: 'ClassicSavages',
    image:
      'https://classicart.io/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F966074148344451192%2F973654182982737980%2Fclassicgreyslogo.jpeg&w=64&q=75',
    link: '/',
  },
  {
    name: 'ClassicSavages',
    image:
      'https://classicart.io/_next/image?url=https%3A%2F%2Fmedia.discordapp.net%2Fattachments%2F966074148344451192%2F973653929873272872%2Fetcbitpixellogo.jpeg&w=64&q=75',
    link: '/',
  },
]
