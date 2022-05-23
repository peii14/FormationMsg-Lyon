import { getSession } from 'next-auth/react'
// import { signOut } from 'next-auth/react'
import { withAuthSync } from '../../utils/auth'

const Dashboard = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2">
      <h1>Dashboard(Protected Route)</h1>
      {/* <button onClick={() => signOut()}>Sign Out</button> */}
    </div>
  )
}
export default withAuthSync(Dashboard)
