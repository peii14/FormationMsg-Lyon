import { getSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

export default function Homescreen({ user }: any) {
  return (
    <div className="h-screen translate-y-1/2">
      <h1>Dashboard(Protected Route)</h1>
      <p>
        Welcome to dashboard: <b>{user.name}</b>
      </p>
      <p>{user.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  if (!session) {
    context.res.writeHead(302, { Location: '/Admin/Login' })
    context.res.end()
    return {}
  }
  return {
    props: {
      user: session.user,
    },
  }
}
