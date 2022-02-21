import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import FrameSection from '../components/FrameSection'
import blur from '../img/blur1.png'
import ava from '../img/Home/ava1.png'
const Home: NextPage = () => {
  return (
    <div className="layout">
      <Head>
        <title>Lyon Formation Massage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex h-screen flex-col justify-center gap-20">
          <div className="grid h-max grid-cols-2 items-center  ">
            <div className=" flex max-w-md flex-col gap-3">
              <h1>Formation Massage</h1>
              <h3>En école, à domicile, à distance</h3>
              <h4>
                Lyon -Thiers - Aix Les Bains - St Chamond Peaugres (07) - Chalon
                S/Saône{' '}
              </h4>
            </div>
            <div className=" ml-auto w-2/3">
              <Image src={ava} />
            </div>
          </div>
          <div className="flex max-w-sm flex-row justify-between ">
            <div>
              <Button type={true} content="Opinion of Our Students" />
            </div>
            <div>
              <Button type={false} content="Contact Us" />
            </div>
          </div>
        </section>
        <section className="">
          <FrameSection title='Un Savoir Faire Reconnu' sub='Since 2005'>
            <h1>DUARRR</h1>
          </FrameSection>
        </section>
      </main>
    </div>
  )
}

export default Home
