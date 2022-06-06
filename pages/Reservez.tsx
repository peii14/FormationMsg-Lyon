import Button from '../components/Button'
import Filters from '../components/Filters'
import FrameSection from '../components/FrameSection'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSort } from '@fortawesome/free-solid-svg-icons'

const Reservez = () => {
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
  const formation1 = [
    { id: 1, name: 'Initiation', unavailable: false },
    { id: 2, name: 'Californien', unavailable: false },
    { id: 3, name: 'Lomi Lomi', unavailable: false },
  ]
  const formation2 = [
    { id: 1, name: 'Assis “Amma”', unavailable: false },
    { id: 2, name: 'Do In', unavailable: false },
    { id: 3, name: 'Shiatsu', unavailable: false },
  ]
  const formation3 = [
    { id: 1, name: 'Massage Etoile', unavailable: false },
    { id: 2, name: 'Kobido', unavailable: false },
    { id: 3, name: 'Réflexologie Palmaire', unavailable: false },
  ]
  let formation = []
  const [branchSelected, setBranchSelected] = useState(branch[0])
  const [typeSelected, setTypeSelected] = useState(msgType[0])
  if (typeSelected.id == 1) {
    formation = formation1
  } else if (typeSelected.id == 2) {
    formation = formation2
  } else formation = formation3

  const [formationSelected, setFormationSelected] = useState(formation[0])

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
          <div className="mb-56 flex flex-col justify-around ">
            <div className="mx-auto grid w-11/12 grid-cols-3 gap-3">
              <div>
                <p className="my-3 text-left">Lieu</p>
                <div className="">
                  <Listbox value={branchSelected} onChange={setBranchSelected}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">
                          {branchSelected.name}
                        </span>
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
                          {branch.map((person: any, personIdx: any) => (
                            <Listbox.Option
                              key={personIdx}
                              className={({ active }) =>
                                `relative z-50 cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? 'bg-amber-100 text-amber-900'
                                    : 'text-gray-900'
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
              </div>
              <div>
                <p className="my-3 text-left">Massage Type</p>
                <div className="">
                  <Listbox value={typeSelected} onChange={setTypeSelected}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">
                          {typeSelected.name}
                        </span>
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
                          {msgType.map((person: any, personIdx: any) => (
                            <Listbox.Option
                              key={personIdx}
                              className={({ active }) =>
                                `relative z-50 cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? 'bg-amber-100 text-amber-900'
                                    : 'text-gray-900'
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
              </div>
              <div>
                <p className="my-3 text-left">Formation</p>
                <div className="">
                  <Listbox
                    value={formationSelected}
                    onChange={setFormationSelected}
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">
                          {formationSelected.name}
                        </span>
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
                          {formation.map((person: any, personIdx: any) => (
                            <Listbox.Option
                              key={personIdx}
                              className={({ active }) =>
                                `relative z-50 cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? 'bg-amber-100 text-amber-900'
                                    : 'text-gray-900'
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
