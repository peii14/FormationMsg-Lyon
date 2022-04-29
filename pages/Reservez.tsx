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
          <div className="flex flex-row justify-around py-10">
            <div className="flex flex-row gap-10">
              <Filters />
              <Filters />
              <Filters />
            </div>
            <Button type={true} content="Search" />
          </div>
        </section>
      </main>
    </div>
  )
}
export default Reservez
