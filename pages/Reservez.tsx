import Button from '../components/Button'
import FrameSection from '../components/FrameSection'
import axios from 'axios'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSort } from '@fortawesome/free-solid-svg-icons'
import { createRouteLoader } from 'next/dist/client/route-loader'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { reset } from '../redux/cartSlice'
import Danger from '../components/Danger'

const Reservez = () => {

  const branch = [
    { id: 1, name: 'Lyon', price: 10 },
    { id: 2, name: 'Thiers', price: 20 },
    { id: 3, name: 'Aix Les Bains', price: 30 },
    { id: 4, name: 'Peraugres', price: 40 },
    { id: 5, name: 'Chalon S/Saône', price: 50 },
    { id: 5, name: 'St Chamond', price: 60 },
    { id: 5, name: 'Pro A Disatance', price: 70 },
  ]
  const msgType = [
    { id: 1, name: 'Les Massages aux Huiles du Corps', unavailable: false },
    { id: 2, name: 'Les Massages Habilléssans huiles', unavailable: false },
    { id: 3, name: 'Massages & Réflexologie', unavailable: false },
  ]
  const formation1 = [
    { id: 1, name: 'Initiation', price: 50 },
    { id: 2, name: 'Californien', price: 25 },
    { id: 3, name: 'Lomi Lomi', price: 21 },
  ]
  const formation2 = [
    { id: 1, name: 'Assis “Amma”', price: 35 },
    { id: 2, name: 'Do In', price: 32 },
    { id: 3, name: 'Shiatsu', price: 10 },
  ]
  const formation3 = [
    { id: 1, name: 'Massage Etoile', price: 28 },
    { id: 2, name: 'Kobido', price: 30 },
    { id: 3, name: 'Réflexologie Palmaire', price: 20 },
  ]
  let formation: any = []
  const [branchSelected, setBranchSelected] = useState(branch[0])
  const [typeSelected, setTypeSelected] = useState(msgType[0])

  if (typeSelected.id == 1) {
    formation = formation1
  } else if (typeSelected.id == 2) {
    formation = formation2
  } else formation = formation3

  const [formationSelected, setFormationSelected] = useState(formation[0])

  const [name, setName] = useState('')
  const [prenom, setPrenom] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [dates, setDates] = useState('')
  const [duration, setDuration] = useState('')
  const dispatch = useDispatch()

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const createOrder = async (data: any) => {
    try {
      const res = await axios.post('http://localhost:3000/api/orders', data)
      if (res.status === 201) {
        dispatch(reset())
        // router.push(`/`)
        setSuccess(true)
        setTimeout(
          function () {
            setSuccess(false)
          }.bind(this),
          5000
        )
        console.log('duradd sabi')
      }
    } catch (err) {
      setError(true)
      setTimeout(
        function () {
          setError(false)
        }.bind(this),
        5000
      )
      console.log(err)
    }
  }
  const [price, setPrice] = useState(0)
  const [visible, setvisible] = useState(false)
  const checkPrice = () => {
    setvisible(true)
    setPrice(branchSelected.price + formationSelected.price)
  }
  const handleBranchChange = (props: any) => {
    setBranchSelected(props)
    setvisible(false)
  }
  const handleTypeChange = (props: any) => {
    setTypeSelected(props)
    const dummy = [{ id: 1, name: 'Select Formation', price: 0 }]
    setFormationSelected(dummy[0])
    setvisible(false)
  }
  const handleFormationChange = (props: any) => {
    setFormationSelected(props)
    setvisible(false)
  }

  const handleCreateOrder = () => {
    const branch = branchSelected.name
    const type = typeSelected.name
    const formation = formationSelected.name
    // let data = JSON.stringify({})
    createOrder({
      name: name,
      prenom: prenom,
      Tel: tel,
      Email: email,
      Address: address,
      Dates: dates,
      Duration: duration,
      Branch: branch,
      Type: type,
      Formation: formation,
      total: price,
    })
  }

  return (
    <div className="layout">
      <div
        className={`fixed left-1/2 z-50 w-1/2 -translate-x-1/2 duration-500 ${
          error ? 'top-5 translate-y-0  ' : 'top-0 -translate-y-full'
        }`}
      >
        <Danger />
      </div>
      <main>
        <section className="pt-24">
          <h2 className="text-center text-5xl font-semibold">
            Dates Formations Massage
          </h2>
          <div className="py-10">
            <h3 className="text-center">Personal Information</h3>
            <div className="grid-flow- mx-auto grid w-8/12 grid-cols-4 gap-5 py-5">
              <p>Nom</p>
              <input
                placeholder="John"
                className=" rounded-md px-2 py-0.5"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />

              <p>Prenom</p>
              <input
                placeholder="John"
                className=" rounded-md px-2 py-0.5"
                type="text"
                onChange={(e) => setPrenom(e.target.value)}
              />

              <p>Tél</p>
              <input
                placeholder="+33123456"
                className=" rounded-md px-2 py-0.5"
                type="text"
                onChange={(e) => setTel(e.target.value)}
              />

              <p>Email</p>
              <input
                placeholder="JohnDoe@gmail.com"
                className=" rounded-md px-2 py-0.5"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />

              <p>Adresse</p>
              <input
                placeholder="Charpenes N-30"
                className=" rounded-md px-2 py-0.5"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
              />
              <p>Durée</p>
              <input
                className=" rounded-md px-2 py-0.5"
                type="text"
                onChange={(e) => setDuration(e.target.value)}
              />

              <p>Dates</p>
              <input
                type="date"
                className=" rounded-md px-2 py-0.5"
                onChange={(e) => setDates(e.target.value)}
              />
            </div>
          </div>

          <h3 className="pt-10 text-center">Sélection</h3>
          <div className="mb-16 flex flex-col justify-around ">
            <div className="mx-auto grid w-11/12 grid-cols-3 gap-3">
              <div>
                <p className="my-3 text-left">Lieu</p>
                <div className="">
                  <Listbox value={branchSelected} onChange={handleBranchChange}>
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
                        <Listbox.Options className="absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                  <Listbox value={typeSelected} onChange={handleTypeChange}>
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
                    onChange={handleFormationChange}
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
              <button onClick={checkPrice}>
                <Button type={true} content="Check Price" />
              </button>
            </div>
            <div
              className={`mt-10 text-center ${visible ? 'block' : 'hidden'}`}
            >
              <h3 className={``}>
                Tarifs pour {typeSelected.name}-{formationSelected.name}
              </h3>
              <h3>{price} €</h3>
            </div>
            <div className="m-auto mt-10 h-full w-max">
              <button onClick={handleCreateOrder}>
                <Button type={true} content="Classe de demande" />
              </button>
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
