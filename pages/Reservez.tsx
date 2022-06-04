import Button from '../components/Button'
import Filters from '../components/Filters'
const Reservez = () => {
  return (
    <div className="layout">
      <main>
        <section className="pt-24">
          <h2 className="text-center text-5xl font-semibold">
            Dates Formations Massage
          </h2>
          <div className="flex flex-col justify-around py-10">
            <div className="mx-auto grid w-1/3 grid-cols-2">
              <p className="my-auto text-center">Branch</p>
              <Filters type='2' />
            </div>
            <div className='w-max mx-auto py-10 '>
              <Button type={true} content="Search" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
export default Reservez
