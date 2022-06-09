import Dropdown from '../components/Dropdown'
import { default as Records } from '../content/OffresMassage.json'
const Tarifs = () => {
  return (
    <div className="layout">
      <main>
        <section className="py-24 text-center">
          <h2 className="text-5xl font-semibold">Offres Massage</h2>
          <h4 className="mt-1">Emplois Collaboration Locaux</h4>
          <div className="mx-auto mt-10 flex flex-col gap-10">
            {Records &&
              Records.map((record) => {
                return (
                  <div className="cursor-pointer">
                    <Dropdown type="2" topic={record.topic} key={record.id}>
                      <div className="px-5 py-2 text-left ">
                        {record.contents?.map((cont) => {
                          return (
                            <>
                              <p className="font-semibold">{cont.list}</p>
                              <p>{cont.content}</p>
                            </>
                          )
                        })}
                        <div className="mt-5">
                          <p>{record.information}</p>
                          <p>{record.date}</p>
                        </div>
                      </div>
                    </Dropdown>
                  </div>
                )
              })}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Tarifs
