import { getSession } from 'next-auth/react'
// import { signOut } from 'next-auth/react'
import { withAuthSync } from '../../utils/auth'
import { useState } from 'react'
import axios from 'axios'
import Button from '../../components/Button'

const Dashboard = ({ orders }: any) => {
  const [orderList, setOrderList] = useState(orders)
  const [MasterChecked, setMasterChecked] = useState(false)
  const [selectedList, setSelectedList] = useState(false)

  // Update List Item's state and Master Checkbox State
  function onItemCheck(e: any, item: any) {
    let tempList = orderList
    tempList.map((user: any) => {
      if (user.id === item.id) {
        user.selected = e.target.checked
      }
      return user
    })

    //To Control Master Checkbox State
    const totalItems = orderList.length
    const totalCheckedItems = tempList.filter((e: any) => e.selected).length

    // Update State
    setMasterChecked(totalItems === totalCheckedItems)
    setOrderList(tempList)
    setSelectedList(orderList.filter((e: any) => e.selected))
  }

  // Event to get selected rows(Optional)
  function getSelectedRows() {
    setSelectedList(orderList.filter((e: any) => e.selected))
  }

  const handleStatus = async (id: any) => {
    const item = orderList.filter((order: any) => order._id === id)[0]
    const currentStatus = item.status

    try {
      const res = await axios.put('http://localhost:3000/api/orders/' + id, {
        status: currentStatus + 1,
      })
      setOrderList([
        res.data,
        ...orderList.filter((order: any) => order._id !== id),
      ])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="layout py-20">
      <div className="">
        <h2 className="py-10">Admin Dashboard</h2>
        <div className="max-h-screen overflow-x-auto overflow-y-scroll border-x border-t">
          <table className="w-full table-auto">
            <thead className="border-b">
              <tr className="bg-gray-100">
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      checked={MasterChecked}
                      id="mastercheck"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label className="sr-only">Nom</label>
                  </div>
                </th>
                <th className="max-w-20 overflow-scroll p-4 text-left font-medium">
                  Nom
                </th>
                <th className="max-w-20 overflow-scroll p-4 text-left font-medium">
                  Prenom
                </th>
                <th className="max-w-20 overflow-scroll p-4 text-left font-medium">
                  Tel
                </th>
                <th className="max-w-20 overflow-scroll p-4 text-left font-medium">
                  Email
                </th>
                <th className="max-w-20 overflow-scroll p-4 text-left font-medium">
                  Address
                </th>
                <th className="max-w-20 overflow-scroll p-4 text-left font-medium">
                  Dates
                </th>
                <th className="max-w-20 overflow-scroll p-4 text-left font-medium">
                  Duration
                </th>
                <th className="max-w-20 overflow-scroll p-4 text-left font-medium">
                  Branch
                </th>
                <th className="max-w-20 overflow-scroll p-4 text-left font-medium">
                  Type
                </th>
                <th className="max-w-20 overflow-scroll p-4 text-left font-medium">
                  Formation
                </th>
                <th className="max-w-20 overflow-scroll p-4 text-left font-medium">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((request: any) => (
                <tr className="border-b hover:bg-gray-50" key={request.key}>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        // checked={request.name}
                        id="rowcheck{request.key}"
                        onChange={(e) => onItemCheck(e, request)}
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <td className="p-4">{request.name}</td>
                  <td className="p-4">{request.prenom}</td>
                  <td className="p-4">{request.Tel}</td>
                  <td className="p-4">{request.Email}</td>
                  <td className="p-4">{request.Address}</td>
                  <td className="p-4">{request.Dates}</td>
                  <td className="p-4">{request.Duration}</td>
                  <td className="p-4">{request.Branch}</td>
                  <td className="p-4">{request.Type}</td>
                  <td className="p-4">{request.Formation}</td>
                  <td className="p-4">€{request.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-row gap-5 py-10">
        <button>
          <Button type={true} content="Accept" />
        </button>
        <button>
          <Button type={false} content="Decline" />
        </button>
      </div>
      {/* <button onClick={() => signOut()}>Sign Out</button> */}
    </div>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const orderRes = await axios.get('http://localhost:3000/api/orders')
  console.log(orderRes)
  return {
    props: {
      orders: orderRes.data,
    },
  }
}

export default withAuthSync(Dashboard)
