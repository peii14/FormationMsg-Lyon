'use strict'

import React, { useState } from 'react'
import Link from 'next/link'
import { Formik } from 'formik'
import * as Yup from 'yup'
import fetch from 'isomorphic-unfetch'
import { login } from '../../utils/auth'

export default function Register() {
  const [loading, setLoading] = useState(false)
  const [networkErrors, setNetworkErrors] = useState(false)

  return (
    <div className="h-screen w-screen">
      <Formik
        initialValues={{ username: '', password: '', retypePassword: '' }}
        validationSchema={Yup.object({
          username: Yup.string()
            .matches(
              /^\w+$/,
              'Usernames can only consist of letters, numbers, and underscores.'
            )
            .required('Please choose a username.'),
          password: Yup.string().required('Please choose a password.'),
          retypePassword: Yup.string().required('Just to make sure.'),
        })}
        onSubmit={async (values, { setFieldError }) => {
          setNetworkErrors(false)

          if (values.password != values.retypePassword) {
            setFieldError('retypePassword', "Oops, your passwords don't match!")
          } else {
            setLoading(true)

            try {
              const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
              })
              if (response.status === 200) {
                const { token } = await response.json()
                login({ token }, false)
              } else if (response.status === 409) {
                setFieldError('username', 'That username is already taken.')
              } else {
                console.log('Registration failed.')
                let error: any = new Error(response.statusText)
                error.response = response
                throw error
              }
            } catch (err) {
              console.error(
                'You have an error in your code or there are network issues.',
                err
              )
              setNetworkErrors(true)
            }
          }

          setLoading(false)
        }}
      >
        {(formik) => (
          <form
            noValidate
            onSubmit={formik.handleSubmit}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-primary px-20 py-10 text-secondary"
          >
            <div className="flex flex-col gap-1">
              <label>Username</label>
              <div className="">
                {/* <InputGroupAddon addonType="prepend">
                  <InputGroupText id="at-sign">@</InputGroupText>
                </InputGroupAddon> */}
                <input
                  name="username"
                  id="username"
                  aria-describedby="at-sign"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  className="w-full text-primary"
                  //   invalid={formik.touched.username && !!formik.errors.username}
                />
                {/* <FormFeedback>{formik.errors.username}</FormFeedback> */}
              </div>
              {/* <p color="muted">You can change this later.</p> */}

              <label>Password</label>
              <input
                name="password"
                id="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="text-primary"
                // invalid={formik.touched.password && !!formik.errors.password}
              />
              {/* <FormFeedback>{formik.errors.password}</FormFeedback> */}

              <label>Retype password</label>
              <input
                name="retypePassword"
                id="retypePassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.retypePassword}
                className="text-primary"
                // invalid={
                //   formik.touched.retypePassword &&
                //   formik.values.retypePassword != formik.values.password
                // }
              />
              {/* <p>
                {formik.errors.retypePassword ||
                    "Oops, your passwords don't match!"}
                </p> */}

              <div>
                <div className="uspdate mx-auto">
                  <button
                    className="my-5 rounded-lg bg-secondary px-5 py-1"
                    color="primary"
                    type="submit"
                    disabled={loading}
                  >
                    Submit
                    {/* {loading ? <Spinner size="sm" /> : 'Register'} */}
                  </button>
                </div>
              </div>

              {networkErrors && (
                <div>
                  <div className="text-danger mx-auto">
                    One of us is experiencing network errors 😞
                  </div>
                </div>
              )}

              <div>
                <div className="update mx-auto mb-2">
                  Already have an account?{' '}
                  <Link href="/Admin/Login">
                    <a>Log in</a>
                  </Link>
                  .
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
