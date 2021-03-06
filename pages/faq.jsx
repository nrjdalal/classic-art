import { useState } from 'react'

const FAQ = () => {
  const FAQs = ({ id, title, content }) => {
    const [open, setOpen] = useState(false)

    return (
      <div
        className="relative mt-10 w-full max-w-3xl cursor-pointer rounded-xl bg-teal-900 p-4"
        key={id}
        onClick={() => setOpen(!open)}
      >
        <div className="absolute top-4 right-5">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
        <h2 className="text-xl font-semibold text-emerald-400">{title}</h2>
        <p className={`pt-3 ${open ? 'block' : 'hidden'}`}>{content}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-20">
      <div className="my-10 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-emerald-500">FAQ</h1>
        <p className="text-lg">All the questions you need an answer to!</p>

        {Questions.map((question) => (
          <FAQs key={question.id} title={question.title} content={question.content} />
        ))}
      </div>
    </div>
  )
}

export default FAQ

const Questions = [
  {
    id: 1,
    title: 'What is ClassicArt?',
    content:
      'Classicart is the most advanced NFT marketplace built on the Ethereum Classic blockchain that allows anyone to create, acquire, or sell Ethereum Classic-based NFTs.',
  },

  {
    id: 1,
    title: 'How does it work?',
    content:
      'When listing your NFT for sale, it is stored on a smart contract that is fully immutable and transparent. This will record the data of all future sales made to guarantee the authenticity of the NFT. When someone buys your NFT the smart contract transfers the ETC amount from the buyer to the seller, and then unlocks the NFT which is sent to the buyer. When creating an NFT on Classicart you simply upload a capable image while filling in the details very carefully (remember nothing is reversable on Ethereum classic) and once completed our site will auto mint your image turning it into an NFT on the ETC blockchain. ',
  },
]
