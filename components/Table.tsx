import { useState } from 'react'
import Button from './Button'
import { useRouter } from 'next/router'

const Table = (props: any) => {
  const [tmpOrderList, setTmpOrderList] = useState([])
  const [MasterChecked, setMasterChecked] = useState(false)
  const [selectedList, setSelectedList]: any = useState([])
  function onItemCheck(e: any, item: any) {
    let tempList = props.orderList
    tempList.map((user: any) => {
      if (user._id === item._id) {
        user.selected = e.target.checked
      }
      return user
    })
    //To Control Master Checkbox State
    const totalItems = props.orderList.length
    const totalCheckedItems = tempList.filter((e: any) => e.selected).length

    // Update State
    setMasterChecked(totalItems === totalCheckedItems)
    setTmpOrderList(tempList)
    setSelectedList(props.orderList.filter((e: any) => e.selected))
  }

  // Event to get selected rows(Optional)
  function getSelectedRows() {
    setSelectedList(props.orderList.filter((e: any) => e.selected))
  }
  const handleAccept = async (order: any) => {
    for (let i = 0; i < selectedList.length; i++) {
      await props.handleStatus(selectedList[i]._id)
    }
    const router = useRouter()

    router.reload()
  }
  function onMasterCheck(e: any) {
    let tempList = props.orderList
    // Check/ UnCheck All Items
    tempList.map((user: any) => (user.selected = e.target.checked))

    //Update State
    setMasterChecked(e.target.checked)
    // setOrderList(tempList)
    props.setSelectedList(props.orderList.filter((e: any) => e.selected))
  }

  return (
    <div>
      <div className="max-h-screen overflow-x-auto overflow-y-scroll border-x-4 border-t-4">
        <table className="w-full table-auto">
          <thead className="border-b-4 border-secondary-HOVER ">
            <tr className="bg-secondary">
              <th
                scope="col"
                className={`${props.type ? 'block p-4' : 'hidden'}`}
              >
                <div className="flex items-center ">
                  <input
                    checked={props.MasterChecked}
                    onChange={(e: any) => onMasterCheck(e)}
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
            {props.orderList.map((request: any) => (
              <tr className="border-b hover:bg-gray-50" key={request.key}>
                <td className={`${props.type ? 'block w-4 p-4' : 'hidden'}`}>
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
      <div
        className={`${
          props.type ? 'block flex flex-row gap-5 py-10' : 'hidden'
        }`}
      >
        <button onClick={handleAccept}>
          <Button type={true} content="Accept" />
        </button>
        <button>
          <Button type={false} content="Decline" />
        </button>
      </div>
    </div>
  )
}
export default Table
