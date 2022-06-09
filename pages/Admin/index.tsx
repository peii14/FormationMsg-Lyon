import { getSession } from 'next-auth/react'
// import { signOut } from 'next-auth/react'
import { withAuthSync } from '../../utils/auth'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../../components/Button'
import { Tab } from '@headlessui/react'
import Table from '../../components/Table'


const Dashboard = ({ orders, accepted }: any) => {
  const [orderList, setOrderList] = useState(orders)
  const [acc, setAccepted] = useState(accepted)
  const handleStatus = async (id: any) => {
    const item = orderList.filter((order: any) => order._id === id)[0]
    const currentStatus = item.status
    try {
      const res = await axios.put('http://localhost:3000/api/orders/' + id, {
        status: currentStatus + 1,
      })
      setOrderList(orderList.filter((item: any) => item.value !== id))
     
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className=" mx-auto max-w-max px-10 py-20">
      <div className="">
        <h2 className="py-10 text-center">Admin Dashboard</h2>
        <h4 className="text-2xl">Customer Request</h4>
        <Table type={true} orderList={orderList} handleStatus={handleStatus} />
      </div>
      <h4 className="text-2xl">Accepted Customer</h4>
      <Table type={false} orderList={acc} handleStatus={handleStatus} />
      {/* <button onClick={() => signOut()}>Sign Out</button> */}
    </div>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const orderRes = await axios.get('http://localhost:3000/api/orders')
  let request = orderRes.data.filter((item: any) => item.status === 0)
  let acc = orderRes.data.filter((item: any) => item.status !== 0)
  return {
    props: {
      orders: request,
      accepted: acc,
    },
  }
}

export default withAuthSync(Dashboard)
