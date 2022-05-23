'use strict'

import React, { useState } from 'react'
import Link from 'next/link'
import { Formik } from 'formik'
import * as Yup from 'yup'
import fetch from 'isomorphic-unfetch'
import { login } from '../../utils/auth'

export default function Login() {
  const [loading, setLoading]: any = useState(false)
  const [networkErrors, setNetworkErrors]: any = useState(false)

  return (
    <div className="h-screen w-screen">
      <Formik
        initialValues={{ username: '', password: '', remember: false }}
        validationSchema={Yup.object({
          username: Yup.string().required('Do not display this error message'),
          password: Yup.string().required('Do not display this error message'),
          remember: Yup.boolean(),
        })}
        onSubmit={async (values: any, { setFieldError: any }) => {
          setNetworkErrors(false)
          setLoading(true)

          try {
            const response = await fetch('/api/auth/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                username: values.username,
                password: values.password,
              }),
            })
            if (response.status === 200) {
              const { token } = await response.json()
              login({ token }, values.remember)
            } else if (response.status === 404) {
              // setFieldError('username', 'No such user exists.')
            } else if (response.status === 401) {
              // setFieldError('password', 'Incorrect password.')
            } else {
              console.log('Login failed.')
              // https://github.com/developit/unfetch#caveats
              let error :any = new Error(response.statusText)
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
          setLoading(false)
        }}
      >
        {(formik) => (
          <form
            noValidate
            onSubmit={formik.handleSubmit}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-primary px-20 py-10 text-secondary"
          >
            <h2 className="mb-5 text-center text-secondary">Admin</h2>
            <section className="flex flex-col gap-1">
              <label>Username</label>
              <input
                name="username"
                id="username"
                aria-describedby="at-sign"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className="text-primary"
                // invalid={formik.touched.username && !!formik.errors.username}
              />
              {formik.errors.username !==
                'Do not display this error message' && (
                <p>{formik.errors.username}</p>
              )}
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
              {formik.errors.password !==
                'Do not display this error message' && (
                <p>{formik.errors.password}</p>
              )}
            </section>

            {/* <section >
              <Label >
                <Input
                  name="remember"
                  type="checkbox"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.remember}
                />{' '}
                Remember me
              </Label>
            </section> */}

            <div>
              <div className="update mx-auto">
                <button
                  className="my-2 rounded-lg bg-secondary px-5 py-2 text-primary"
                  color="primary"
                  type="submit"
                  disabled={loading}
                >
                  Log In
                  {/* {loading ? <div size="sm" /> : 'Log in'} */}
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
                Don't have an account yet?{' '}
                <Link href="/Admin/Register">
                  <a>Register</a>
                </Link>
                .
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
