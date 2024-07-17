import Navbar from "../../Components/organisms/Navbar"
import Sidebar from "../../Components/organisms/Sidebar"
import { useEffect, useState } from 'react'
import MinimizedSidebar from '../../Components/organisms/MinimizedSidebar'




const Create = () => {
  const [menu, setMenu] = useState('')

  useEffect(()=> {
    document.title = "Admin • Create"
  }, [])

  useEffect(()=> {
    const fetchMenu = localStorage.getItem('menu')
    setMenu(fetchMenu ?? 'open')
  }, [])

 

  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <div className="flex flex-row w-full h-full">
        {menu === "open" ? <Sidebar /> : <MinimizedSidebar />}
        <div className={menu === "open" ? "w-full bg-[#e9eef0] p-[0px]  md:w-[85%]" : "w-full bg-[#e9eef0] p-[0px]  md:w-[100%]"}>
          <div className="overflow-y-scroll w-full h-full bg-[#fff] p-[20px]">
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
