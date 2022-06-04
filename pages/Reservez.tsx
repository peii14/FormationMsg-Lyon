import Button from '../components/Button'
import Filters from '../components/Filters'
import FrameSection from '../components/FrameSection'
const Reservez = () => {
  return (
    <div className="layout">
      <main>
        <section className="pt-24">
          <h2 className="text-center text-5xl font-semibold">
            Dates Formations Massage
          </h2>
          <div className="py-10">
            <h3 className="text-center">Personal Information</h3>
            <div className="grid-flow- mx-auto grid w-8/12 grid-cols-4 gap-5 py-5">
              <p>Nom</p>
              <input className=" rounded-md" type="text" />

              <p>Prenom</p>
              <input className=" rounded-md" type="text" />

              <p>Tél</p>
              <input className=" rounded-md" type="text" />

              <p>Email</p>
              <input className=" rounded-md" type="text" />

              <p>Adresse</p>
              <input className=" rounded-md" type="text" />

              <p>Durée</p>
              <input className=" rounded-md" type="text" />

              <p>Dates</p>
              <input className=" rounded-md" type="text" />
            </div>
          </div>

          <h3 className="pt-10 text-center">Select Service</h3>
          <div className="flex flex-row justify-around ">
            <div className="mx-auto grid w-1/2 grid-cols-3 gap-3">
              <div>
                <p className="my-3 text-center">Lieu</p>
                <Filters type="1" />
              </div>
              <div>
                <p className="my-3 text-center">Formation</p>
                <Filters type="2" />
              </div>
              <div>
                <p className="my-3 text-center">???</p>
                <Filters type="3" />
              </div>
            </div>
            <div className="m-auto mt-10 h-full w-max">
              <Button type={true} content="Search" />
            </div>
          </div>
          <div className="mx-auto w-8/12 py-20">
            <FrameSection title="Réservez vos places sur notre site:">
              <ul className="mx-auto w-max list-decimal pt-10">
                <li>
                  <p>Choisissez vos dates de formation </p>
                </li>
                <li>
                  <p>
                    Allez sur la page Inscription cliquez ici (réservez
                    gratuitement)
                  </p>
                </li>
                <li>
                  <p>
                    Complétez le formulaire (nom de la formation, dates, email,
                    nom)
                  </p>
                </li>
                <li>
                  <p>Nous confirmons sous 24H que votre Place est réservée</p>
                </li>
                <li>
                  <p>
                    Validez votre inscription en réglant 1/3 du montant de la
                    formation
                  </p>
                </li>
              </ul>
            </FrameSection>
          </div>
        </section>
      </main>
    </div>
  )
}
export default Reservez
