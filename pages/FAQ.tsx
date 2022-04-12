import Dropdown from '../components/Dropdown'
import { default as Records } from '../content/faq.json'

const FAQ = () => {
  return (
    <div className="layout">
      <main>
        <section className="pt-24">
          <h2 className="text-center text-5xl font-semibold">
            Questions Fréquentes
          </h2>
          <div className="my-10 flex flex-col gap-10 rounded-2xl bg-primary p-10">
            {Records &&
              Records.map((record) => {
                return (
                  <Dropdown
                    type="1"
                    topic={record.question}
                    key={record.id}
                    isDark={true}
                  >
                    <div className="text-justify">
                      <p className='text-secondary'>{record.ans}</p>
                    </div>
                  </Dropdown>
                )
              })}
          </div>
        </section>
      </main>
    </div>
  )
}

export default FAQ
