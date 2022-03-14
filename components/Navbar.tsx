import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className="absolute w-screen px-10 py-7  ">
      <ul className="mr-auto flex max-w-lg flex-row justify-around ">
        <Link href="/">
          <li>
            <a className="cursor-pointer">Formations</a>
          </li>
        </Link>
        <Link href="/Reservez">
          <li>
            <a className="cursor-pointer">Date &#38; Réservez</a>
          </li>
        </Link>{' '}
        <Link href="/Tarifs">
          <li>
            <a className="cursor-pointer">Tarifs</a>
          </li>
        </Link>
        <Link href="/FAQ">
          <li>
            <a className="cursor-pointer">FAQ</a>
          </li>
        </Link>
      </ul>
    </nav>
  )
}
export default Navbar
