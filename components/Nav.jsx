import Link from 'next/link'

const Nav = () => {
  return (
    <div className="flex justify-center space-x-2 bg-black py-2">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/market">
        <a>Market</a>
      </Link>
      <Link href="/collections">
        <a>Collections</a>
      </Link>
      <Link href="/stats">
        <a>Stats</a>
      </Link>
      <Link href="/faq">
        <a>FAQ</a>
      </Link>
      <Link href="/create">
        <a>Create</a>
      </Link>
    </div>
  )
}

export default Nav
