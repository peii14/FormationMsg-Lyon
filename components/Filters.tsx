import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSort } from '@fortawesome/free-solid-svg-icons'
const Filter = (props: any) => {
  let maps: any = []
  const branch = [
    { id: 1, name: 'Lyon', unavailable: false },
    { id: 2, name: 'Thiers', unavailable: false },
    { id: 3, name: 'Aix Les Bains', unavailable: false },
    { id: 4, name: 'Peraugres', unavailable: true },
    { id: 5, name: 'Chalon S/Saône', unavailable: false },
    { id: 5, name: 'St Chamond', unavailable: false },
    { id: 5, name: 'Pro A Disatance', unavailable: false },
  ]
  const msgType = [
    { id: 1, name: 'Les Massages aux Huiles du Corps', unavailable: false },
    { id: 2, name: 'Les Massages Habilléssans huiles', unavailable: false },
    { id: 3, name: 'Massages & Réflexologie', unavailable: false },
  ]
  if (props.type == 1) {
    maps = branch
  } else if (props.type == 2) {
    maps = msgType
  } else {
    maps = branch
  }
  const [selected, setSelected] = useState(maps[0])

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <FontAwesomeIcon
                icon={faSort}
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {maps.map((person: any, personIdx: any) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative z-50 cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <FontAwesomeIcon
                            size="2x"
                            className={`h-5 w-5 duration-500 `}
                            icon={faCheck}
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default Filter
