import FrameSection from './FrameSection'
import Button from './Button'
import { useState, useEffect } from 'react'

const MailOffer = () => {
  const [form, setForm] = useState({ email: '' })
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
    try {
      const res = await fetch('/api/offerGuide', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
    } catch (error) {
      setAlert(true)
      
      console.log(error)
    }
  }
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    let errs = validate()
    setErrors(errs)
    setIsSubmitting(true)
  }
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({
      ...form,
      email: e.target.value,
    })
  }

  const validate = () => {
    let err = {}
    if (!form.email) {
      err = 'Email is required'
    }

    return err
  }

  return (
    <FrameSection hidden={true} title="Offre de Guidage">
      <h2>Comment Devenir Masseur(se) Professionnel(le)</h2>
      <h4 className="mt-5">saisissez votre adresse email:</h4>
      <form className="mx-auto mt-10  max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-row gap-10">
          <label
            className="m-auto mb-2 block text-sm font-bold text-gray-700"
            // for="username"
          >
            E-mail:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded-2xl border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="email"
            type="email"
            placeholder="E-mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={handleChange}
            required
          ></input>
        </div>
        <button type="submit" className="ml-auto mt-5 w-1/2">
          <Button type="1" content="je reçois mon guide offert" />
        </button>
      </form>
    </FrameSection>
  )
}

export default MailOffer
