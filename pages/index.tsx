import type { NextPage } from 'next'
import Title from '../components/Title'
import Image from 'next/image'
import Button from '../components/Button'
import FrameSection from '../components/FrameSection'
import blur from '../img/blur1.png'
import ava from '../img/Home/ava1.png'
import Neuromorphism from '../components/Neuromorphism'
import Formation from '../components/Formation'
const Home: NextPage = () => {
  return (
    <div className="layout">
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
        <section className="mx-auto max-w-3xl py-10">
          <FrameSection title="Un Savoir Faire Reconnu" sub="Since 2005">
            <ul className="mt-16 list-outside list-decimal">
              <li>
                <p>Formations Massage professionnelles certifiantes</p>
              </li>
              <li>
                <p>Cours de 1 à 6 personnes pour un Suivi Personnalisé</p>
                <ul className="ml-5 list-disc ">
                  <li>
                    <p>Des formations chaque semaine</p>
                  </li>
                  <li>
                    <p>12 mois/ 12 en semaine et week end</p>
                  </li>
                </ul>
              </li>
              <li>
                <p>Des 100 aines de Masseurs formés chaque année</p>
              </li>
              <li>
                <p>
                  Vos Formateurs pratiquent sur vous Chaque geste ils vous
                  conseillent étape aprés étape
                </p>
              </li>
              <li>
                <p>Un Accompagnement Professionnel</p>
              </li>
              <li>
                <p>Vous pratiquez sur votre Formatrice(eur)</p>
              </li>
              <li>
                <p>Organisme de Formation Professionnel</p>
              </li>
              <li>
                <p>Prise en charge possible du coût de vos formations</p>
              </li>
              <li>
                <p>Membre de la Fédération WMF</p>
              </li>
            </ul>
            <div className="mx-auto mt-5 w-1/4">
              <Button type="1" content="En Savoir Plus" />
            </div>
          </FrameSection>
        </section>
        <section className="py-10">
          <div className="mx-auto w-1/4">
            <Title title="Formations" />
          </div>
          <div className="py-10">
            <h3 className="mx-auto max-w-3xl text-center font-bold">
              7j/7 12 Mois/12 Cours Individuels et 2 à 6 Personnes En école, à
              domicile, à distance
            </h3>
            <div className="flex flex-row justify-around py-10">
              <div className="w-1/2">
                <Formation status="2" />
              </div>
              <div className="w-1/2">
                <Formation status="1" />
              </div>
            </div>
            <div className="grid grid-cols-2 justify-between gap-20 py-20">
              <FrameSection
                title="Des Formations Complétes"
                sub=""
                hidden={true}
              >
                <ul className="mt-20 list-decimal p-5">
                  <li>
                    <p> Etude du savoir faire professionel, théorique...</p>
                  </li>
                  <li>
                    <p>S'installer, trouver ses clients...</p>
                  </li>
                  <li>
                    <p>Suivi individuel permanent</p>
                  </li>
                  <li>
                    <p> lors de la pratique</p>
                  </li>
                  <li>
                    <p>Matériel et supports de cours fournits...</p>
                  </li>
                </ul>
              </FrameSection>
              <FrameSection
                title="25 Formations Massage Pour Tous"
                sub=""
                hidden={true}
              >
                <ul className="mt-20 list-decimal p-5 ">
                  <li>
                    <p>Devenez Masseuse (eur) Professionnel(le)</p>
                  </li>
                  <li>
                    <p>Complétez vos compétences</p>
                  </li>
                  <li>
                    <p>
                      Vous initiez pour apprendre les bons gestes du massage et
                      le toucher juste
                    </p>
                  </li>
                  <li>
                    <p>Nous pouvons vous former en Anglais</p>
                  </li>
                </ul>
              </FrameSection>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
