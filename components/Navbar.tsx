import Link from "next/link"
const Navbar = () => {
  return (
      <nav className="w-screen px-10 py-7 absolute  ">
          <ul className="flex flex-row max-w-xl justify-around mr-auto ">
              <Link href="/">
                  <li><a className="cursor-pointer">Formations</a></li>
              </Link>
              <Link href="/">
                  <li><a className="cursor-pointer">Formations</a></li>
              </Link>
              <Link href="/">
                  <li><a className="cursor-pointer">FAQ</a></li>
              </Link>
          </ul>
      </nav>
  )
}
export default Navbar
