import Dropdown from './Dropdown'
import Neuromorphism from './Neuromorphism'

const FormationDropdown = () => {
  return (
    <div className="mt-5">
      <Dropdown topic="Les Massages aux Huiles du Corps">
        <div className="grid grid-cols-5 gap-10">
          <Neuromorphism>
            <div className='item-center'>
              <p className="text-center">Initiation</p>
            </div>
          </Neuromorphism>
          <Neuromorphism>
            <p>Amincissant </p>
          </Neuromorphism>
          <Neuromorphism>
            <p>Tuina 1 &#38; 2n</p>
          </Neuromorphism>
          <Neuromorphism>
            <p>Femme Enceinte</p>
          </Neuromorphism>
          <Neuromorphism>
            <p>Personnes Agées</p>
          </Neuromorphism>
        </div>
      </Dropdown>
    </div>
  )
}
export default FormationDropdown
