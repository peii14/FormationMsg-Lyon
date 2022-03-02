import Dropdown from './Dropdown'
import Modal from './Modal'
import Neuromorphism from './Neuromorphism'

const FormationDropdown = () => {
  return (
    <div className="mt-5">
      <Dropdown topic="Les Massages aux Huiles du Corps">
        <div className="grid grid-cols-5 gap-10 text-center items-center ">
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
          <div className="grow-0 col-start-2">
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
      <Dropdown
        topic="Les Massages Habillés
sans huiles"
      ></Dropdown>
      <Dropdown topic="Massages &#38; Réflexologie"></Dropdown>
    </div>
  )
}
export default FormationDropdown
