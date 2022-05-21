import styles from '../../styles/Login.module.css'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        {/* {!session && ( */}
        <button onClick={() => signIn()} className={` bg-primary text-secondary p-3 w-1/2 mx-auto mt-10 hover:bg-secondary hover:text-primary duration-500`}>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Login
