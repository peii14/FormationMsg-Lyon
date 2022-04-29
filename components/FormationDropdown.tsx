import Dropdown from './Dropdown'
import Modal from './Modal'

const FormationDropdown = () => {
  return (
    <div className="mt-5 flex flex-col gap-5">
      
      <Dropdown topic="Les Massages aux Huiles du Corps" type="1">
        <div className="grid grid-cols-5 items-center gap-10 text-center ">
          <div className="grow-0">
            <Modal title="Initiation" />
          </div>
          <div className="grow-0">
            <Modal title="Amincissant" />
          </div>
          <div className="grow-0">
            <Modal title="Tuina 1 &#38; 2n" />
          </div>
          <div className="grow-0">
            <Modal title="Femme Enceinte" />
          </div>
          <div className="grow-0">
            <Modal title="Personnes Agées" />
          </div>
          <div className="grow-0">
            <Modal title="Ayurvédique" />
          </div>
          <div className="grow-0">
            <Modal title="Californien" />
          </div>
          <div className="grow-0">
            <Modal title="Pierres Chaudes" />
          </div>
          <div className="grow-0">
            <Modal title="Balinaiss" />
          </div>
          <div className="grow-0">
            <Modal title="Lomi Lomi" />
          </div>
          <div className="col-start-2 grow-0">
            <Modal title="Drainage Lymphatique" />
          </div>
          <div className="grow-0">
            <Modal title="Sportif &#38; Suédois" />
          </div>
          <div className="grow-0">
            <Modal title="Ventre Chi Nei Tsang" />
          </div>
        </div>
      </Dropdown>
      <Dropdown topic="Les Massages Habillés sans huiles" type="1">
        <div className="grid grid-cols-5 items-center gap-10 text-center ">
          <div className="grow-0">
            <Modal title="Assis “Amma”" />
          </div>
          <div className="grow-0">
            <Modal title="Do In" />
          </div>
          <div className="grow-0">
            <Modal title="Shiatsu" />
          </div>
          <div className="grow-0">
            <Modal title="Femme Enceinte" />
          </div>
          <div className="grow-0">
            <Modal title="Thaïlandais" />
          </div>
          <div className="grow-0">
            <Modal title="Post Grossesse" />
          </div>
          <div className="grow-0">
            <Modal title="Bébé Shantala" />
          </div>
          <div className="grow-0">
            <Modal title="Massage de l’Enfant" />
          </div>
          <div className="grow-0">
            <Modal title="Animation Atelier Enfant" />
          </div>
          <div className="grow-0">
            <Modal title="Bébé &#38; Animation d'Atelier" />
          </div>
          <div className="col-start-3 grow-0">
            <Modal title="Assis “Amma” A distance" />
          </div>
        </div>
      </Dropdown>
      <Dropdown topic="Massages &#38; Réflexologie" type="1">
        <div className="grid grid-cols-5 items-center gap-10">
          <div className="grow-0">
            <Modal title="Massage Etoile" />
          </div>
          <div className="grow-0">
            <Modal title="Ventre Chi Nei Tsang" />
          </div>
          <div className="grow-0">
            <Modal title="Visage Indien Marmas" />
          </div>
          <div className="grow-0">
            <Modal title="Kobido" />
          </div>
          <div className="grow-0">
            <Modal title="Tête Mains Pieds" />
          </div>
          <div className="col-start-2 grow-0">
            <Modal title="Réflexologie Plantaire" />
          </div>
          <div className="grow-0">
            <Modal title="Réflexologie Palmaire" />
          </div>
          <div className="grow-0">
            <Modal title="Dien Chan" />
          </div>
        </div>
      </Dropdown>
    </div>
  )
}
export default FormationDropdown
