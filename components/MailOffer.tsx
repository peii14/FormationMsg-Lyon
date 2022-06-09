import FrameSection from './FrameSection'
import Button from './Button'
import { useState, useEffect } from 'react'
import axios from 'axios'
const MailOffer = () => {
  const [email, setForm] = useState('')
  const [alert, setAlert] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        addOffer()
      } else {
        setIsSubmitting(false)
      }
    }
  }, [errors])

  const addOffer = async () => {
    let data = { email: email }
    try {
      axios.post('http://localhost:3000/api/offerGuide', data)
    } catch (error) {
      // setAlert(true)
      console.log(error)
    }
  }

  return (
    <FrameSection hidden={true} title="Offre de Guidage">
      <h2>Comment Devenir Masseur(se) Professionnel(le)</h2>
      <h4 className="mt-5">saisissez votre adresse email:</h4>
      <div className="mx-auto mt-10  max-w-lg">
        <div className="flex flex-row gap-10">
          <label className="m-auto mb-2 block text-sm font-bold text-gray-700">
            E-mail:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded-2xl border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="email"
            type="email"
            placeholder="E-mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={(e) => setForm(e.target.value)}
            required
          ></input>
        </div>
        <button onClick={addOffer} className="ml-auto mt-5 w-1/2">
          <Button type="1" content="je reçois mon guide offert" />
        </button>
      </div>
    </FrameSection>
  )
}

export default MailOffer
