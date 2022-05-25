import Link from 'next/link'

const Nav = () => {
  return (
    <div className="flex justify-center space-x-2 bg-black py-2">
      <Link href="/">
        <a className="text-red-500">Home</a>
      </Link>
      <Link href="/market">
        <a>Market</a>
      </Link>
      <Link href="/collections">
        <a>Collections</a>
      </Link>
      <Link href="/create">
        <a>Create</a>
      </Link>

      <Link href="/stats">
        <a className="text-emerald-500">Stats</a>
      </Link>
      <Link href="/faq">
        <a className="text-emerald-500">FAQ</a>
      </Link>
      <Link href="/terms-of-service">
        <a className="text-emerald-500">Terms</a>
      </Link>
    </div>
  )
}

export default Nav
