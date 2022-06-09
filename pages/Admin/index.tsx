import { getSession } from 'next-auth/react'
// import { signOut } from 'next-auth/react'
import { withAuthSync } from '../../utils/auth'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../../components/Button'
import { Tab } from '@headlessui/react'
import Table from '../../components/Table'
import { Fragment } from 'react'

const Dashboard = ({ orders, accepted, mail }: any) => {
  const [orderList, setOrderList] = useState(orders)
  const [acc, setAccepted] = useState(accepted)
  const [emails, setEmail] = useState(mail)
  const [offer, setOffer] = useState('')

  const [tmpOrderList, setTmpOrderList] = useState([])
  const [MasterChecked, setMasterChecked] = useState(false)
  const [selectedList, setSelectedList]: any = useState([])

  const handleStatus = async (id: any) => {
    const item = orderList.filter((order: any) => order._id === id)[0]
    const currentStatus = item.status
    let mail = {
      to: 'client@gmail.com',
      subject: 'Accepted',
      message: 'Class has been accepted',
    }
    try {
      const res = await axios.put('http://localhost:3000/api/orders/' + id, {
        status: currentStatus + 1,
      })
      const res2 = await axios.post('http://localhost:3000/api/mail', mail)
      setOrderList(orderList.filter((item: any) => item.value !== id))
    } catch (err) {
      console.log(err)
    }
  }
  const handleDelete = async (id: any) => {
    console.log(id)
    let mail = {
      to: 'client@gmail.com',
      subject: 'Rejected',
      message: 'Class has been Rejected',
    }
    try {
      const res = await axios.delete('http://localhost:3000/api/orders/' + id)
      const res2 = await axios.post('http://localhost:3000/api/mail', mail)

      setOrderList(orderList.filter((order: any) => order._id !== id))
    } catch (err) {
      console.log(err)
    }
  }
  const sendOffer = async (id: any) => {
    for (let i = 0; i < selectedList.length; i++) {
      let mail = {
        to: selectedList[i].email,
        subject: 'Offer',
        message: offer,
      }
      try {
        const res2 = await axios.post('http://localhost:3000/api/mail', mail)
        if (res2.status === 201) {
          console.log('success')
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
  function onMasterCheck(e: any) {
    let tempList = emails
    // Check/ UnCheck All Items
    tempList.map((user: any) => (user.selected = e.target.checked))

    //Update State
    setMasterChecked(e.target.checked)
    // setOrderList(tempList)
    setSelectedList(emails.filter((e: any) => e.selected))
  }
  function onItemCheck(e: any, item: any) {
    let tempList = emails
    tempList.map((user: any) => {
      if (user._id === item._id) {
        user.selected = e.target.checked
      }
      return user
    })
    //To Control Master Checkbox State
    const totalItems = emails.length
    const totalCheckedItems = tempList.filter((e: any) => e.selected).length

    // Update State
    setMasterChecked(totalItems === totalCheckedItems)
    setTmpOrderList(tempList)
    setSelectedList(emails.filter((e: any) => e.selected))
  }

  return (
    <div className=" mx-auto max-w-max px-10 py-20">
      <div className="">
        <h2 className="py-10 text-center">Admin Dashboard</h2>
        <Tab.Group>
          <Tab.List>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`duration-200
                    ${
                      selected
                        ? 'bg-primary text-white '
                        : 'bg-white text-black'
                    } mr-5 rounded-xl px-5 py-2 
                    `}
                >
                  Tab 1
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`duration-200
                    ${
                      selected ? 'bg-primary text-white' : 'bg-white text-black'
                    }
                    rounded-xl px-5 py-2
                  `}
                >
                  Tab 2
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="py-5">
                <h4 className="py-5 text-2xl">Customer Request</h4>
                <Table
                  type={true}
                  orderList={orderList}
                  handleStatus={handleStatus}
                  handleDelete={handleDelete}
                />
                <h4 className="text-2xl">Accepted Customer</h4>
                <Table
                  handleDelete={handleDelete}
                  type={false}
                  orderList={acc}
                  handleStatus={handleStatus}
                />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="layout w-screen ">
                <div className="mx-auto">
                  <div className="">
                    <p className="mb-10 text-center text-xl font-bold">
                      Email Offer
                    </p>
                    <div className="mx-auto mb-5 flex w-max flex-col">
                      <p className="mb-5 text-center">Offer Massage</p>
                      <div>
                        <input
                          className=" w-max rounded-md px-2 py-0.5 "
                          type="text"
                          onChange={(e) => setOffer(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <table className="mx-auto w-max table-auto">
                    <thead className="border-b-4 border-secondary-HOVER ">
                      <tr className="bg-secondary">
                        <th scope="col" className={`block  p-4`}>
                          <div className="flex items-center ">
                            <input
                              checked={MasterChecked}
                              onChange={(e: any) => onMasterCheck(e)}
                              id="mastercheck"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                            />
                            <label className="sr-only">Nom</label>
                          </div>
                        </th>
                        <th className="max-w-20 overflow-scroll p-4 text-left font-medium">
                          Email
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {emails.map((request: any) => (
                        <tr
                          className="border-b hover:bg-gray-50"
                          key={request.key}
                        >
                          <td className={`block w-4 p-4`}>
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
                          <td className="p-4">{request.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mx-auto w-max ">
                  <button className="py-5" onClick={sendOffer}>
                    <Button type={true} content="Send Offer" />
                  </button>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        {/* <button onClick={() => signOut()}>Sign Out</button> */}
      </div>
    </div>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const orderRes = await axios.get('http://localhost:3000/api/orders')
  const mailRes = await axios.get('http://localhost:3000/api/offerGuide')
  let request = orderRes.data.filter((item: any) => item.status === 0)
  let acc = orderRes.data.filter((item: any) => item.status !== 0)
  let mails = mailRes.data
  return {
    props: {
      orders: request,
      accepted: acc,
      mail: mails,
    },
  }
}

export default withAuthSync(Dashboard)
