import Navbar from "../../Components/organisms/Navbar"
import Sidebar from "../../Components/organisms/Sidebar"
import { useEffect } from 'react'


const Management = () => {
  useEffect(()=> {
    document.title = "Admin • Management"
  }, [])

  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <div className="flex flex-row w-full h-full">
        <Sidebar />
        <div className="w-full bg-[#e9eef0] p-[20px] md:w-[85%]">
          <div className="overflow-y-scroll w-full h-full bg-[#fff]">Management</div>
        </div>
      </div>
    </div>
  )
}

export default Management
