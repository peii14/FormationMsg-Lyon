import { getSession } from 'next-auth/react'
// import { signOut } from 'next-auth/react'
import { withAuthSync } from '../../utils/auth'
import { useState } from 'react';
import axios from 'axios'
const Dashboard = () => {
  let List :any = []
  let MasterChecked= null
  let SelectedList = null
   // Update List Item's state and Master Checkbox State
   function onItemCheck(e :any, item:any) {
    let tempList = List;
    tempList.map((user:any) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = List.length;
    const totalCheckedItems = tempList.filter((e :any) => e.selected).length;

    // Update State
  
      MasterChecked = totalItems === totalCheckedItems
      List = tempList
      SelectedList = List.filter((e :any) => e.selected)
   
  }

  // Event to get selected rows(Optional)
  function getSelectedRows() {
  
      SelectedList = List.filter((e :any) => e.selected),

  }
  return (
    <div className="layout ">
      <h1>Dashboard(Protected Route)</h1>
      <div className="">
            <div className="overflow-x-auto border-x border-t">
              <table className="table-auto w-full">
                <thead className="border-b">
                  <tr className="bg-gray-100">
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          checked={MasterChecked}
                          id="mastercheck"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="sr-only">checkbox</label>
                      </div>
                    </th>
                    <th className="text-left p-4 font-medium">Address</th>
                    <th className="text-left p-4 font-medium">
                      Account Balance (Ethereum Mainnet)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customerRequest.map((request :any) => (
                    <tr className="border-b hover:bg-gray-50" key={request.key}>
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={request.selected}
                            id="rowcheck{request.key}"
                            onChange={(e) => onItemCheck(e, request)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label className="sr-only">checkbox</label>
                        </div>
                      </td>
                      <td className="p-4">{request.address}</td>
                      <td className="p-4 mx-auto"> 0 ETH</td>
                      {/* {getBall(request.address)} */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      {/* <button onClick={() => signOut()}>Sign Out</button> */}
    </div>
  )
}
export default withAuthSync(Dashboard)

export const getServerSideProps = async (ctx :any) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};