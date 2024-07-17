import Sidebar from "../../Components/organisms/Sidebar"
import Navbar from "../../Components/organisms/Navbar"
import { useEffect, useState } from 'react'
import MinimizedSidebar from '../../Components/organisms/MinimizedSidebar'

const Analytics = () => {
  const [menu, setMenu] = useState('')

  useEffect(() => {
    document.title = "Admin • Analytics";
  }, [])

  useEffect(()=> {
    const fetchMenu = localStorage.getItem('menu')
    setMenu(fetchMenu ?? 'open')
  }, [menu])


  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <div className="flex flex-row w-full h-full">
        {menu === "open" ? <Sidebar /> : <MinimizedSidebar />}
        <div className={menu === "open" ? "w-full bg-[#e9eef0] p-[0px]  md:w-[85%]" : "w-full bg-[#e9eef0] p-[0px]  md:w-[100%]"}>

          <div className="overflow-y-scroll w-full h-full bg-[#fff] p-[20px]">
              <div className="text-[20px] font-black text-slate-700 select-none md:text-[30px]">Dashboard</div>
              <div className="grid mt-[20px] mb-[20px] grid-cols-1 gap-[10px] w-full md:grid-cols-3">
                <div className="w-full bg-blue-500 select-none p-[20px] flex flex-row space-x-[14px]">Total Articles</div>
                <div className="w-full bg-blue-500 select-none p-[20px] flex flex-row space-x-[14px]">Total Subscribers</div>
                <div className="w-full bg-blue-500 select-none p-[20px] flex flex-row space-x-[14px]">Contact Messages</div>
              </div>
              <div className="text-[16px] font-black text-slate-700 select-none md:text-[20px]">Recent Activties</div>
              <div className="flex flex-col md:flex-row">
                  <div className="bg-red-500 w-full md:w-[70%]">h</div>
                  <div className="bg-green-500 w-full md:w-[30%]">Recently subscribers</div>
              </div>
              <div className="text-[16px] font-black text-slate-700 select-none md:text-[20px]">Contact Messages</div>
              <div>
                <div className="flex bg-blue-500 p-[20px] flex-row items-center justify-between">
                  <div>No</div>
                  <div>Email</div>
                  <div>Subject</div>
                  <div>Message</div>
                  <div>View</div>
                </div>
                <div className="flex bg-blue-500 p-[20px] flex-row items-center justify-between">
                  <div>No</div>
                  <div>Email...</div>
                  <div>Subject...</div>
                  <div>Message...</div>
                  <div>View</div>
                </div>
                <div className="flex bg-blue-500 p-[20px] flex-row items-center justify-between">
                  <div>No</div>
                  <div>Email...</div>
                  <div>Subject...</div>
                  <div>Message...</div>
                  <div>View</div>
                </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Analytics
