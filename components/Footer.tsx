import Image from 'next/image'
import logo from '../img/logo.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faLinkedin,
  faYoutube,
  faGoogle,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <footer className=" bg-primary p-20 ">
      <div className="flex flex-row justify-between max-w-4xl mx-auto">
        <div className="mt-5 ">
          <Image src={logo} width={120} height={120} />
        </div>
        <div className="flex flex-col w-1/3 gap-3 text-secondary">
          <h3 className="tracking-widest text-secondary">Contactez Nous</h3>
          <div className="grid grid-cols-2 gap-3  ">
            <Link href="https://www.linkedin.com/company/ppi-lyon/">
              <a target={'_blank'}>
                <div className="flex flex-row gap-3">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  <p className="text-secondary">Linkedin</p>
                </div>
              </a>
            </Link>
            <Link href="https://www.facebook.com/ppilyon/">
              <a target={'_blank'}>
                <div className="flex flex-row gap-3">
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                  <p className="ml-1.5 text-secondary">Facebook</p>
                </div>
              </a>
            </Link>
            <Link href="https://www.instagram.com/ppi_lyon/">
              <a target={'_blank'}>
                <div className="flex flex-row gap-3">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                  <p className="text-secondary">Instagram</p>
                </div>
              </a>
            </Link>

            <Link href="https://www.youtube.com/c/PPILyon/featured">
              <a target={'_blank'}>
                <div className="flex flex-row gap-3">
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                  <p className="text-secondary">Youtube</p>
                </div>
              </a>
            </Link>
            <Link href="mailto:ppi.di.lyon@gmail.com">
              <a target={'_blank'}>
                <div className="flex flex-row gap-3">
                  <FontAwesomeIcon icon={faGoogle} size="lg" />
                  <p className="ml-0.5 text-secondary">ppi.di.lyon@gmail.com</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
