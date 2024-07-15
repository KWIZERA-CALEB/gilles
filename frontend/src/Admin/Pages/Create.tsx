import Navbar from "../../Components/organisms/Navbar"
import Sidebar from "../../Components/organisms/Sidebar"
import { useEffect, useState } from 'react'
import MinimizedSidebar from '../../Components/organisms/MinimizedSidebar'
import FormInput from "../../Components/atoms/FormInput"



const Create = () => {
  const [menu, setMenu] = useState('')

  useEffect(()=> {
    document.title = "Admin • Create"
  }, [])

  useEffect(()=> {
    const fetchMenu = localStorage.getItem('menu')
    setMenu(fetchMenu ?? 'open')
  }, [])

  const handleFullNameChange = ()=> {

  }

  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <div className="flex flex-row w-full h-full">
        {menu === "open" ? <Sidebar /> : <MinimizedSidebar />}
        <div className={menu === "open" ? "w-full bg-[#e9eef0] p-[0px]  md:w-[85%]" : "w-full bg-[#e9eef0] p-[0px]  md:w-[100%]"}>
          <div className="overflow-y-scroll w-full h-full bg-[#fff] p-[20px]">
              <div className="w-full p-[0px] md:p-[15px] rounded-[6px]">
                <h4 className="font-black text-[32px] text-start text-slate-900 select-none">Create Page</h4>
              </div>
              <div className="flex flex-row w-full mt-[10px]">
                <div className="w-full md:w-[70%] p-[30px]">
                    <div>
                      <p>Article Title</p>
                      <FormInput inputType="text" onchange={handleFullNameChange} value="" placeholder="Article Title" />
                    </div>
                    <div className="w-full border-[2px] border-solid border-gray-300 p-[40px] rounded-[12px]">Images</div>
                </div>
                <div className="bg-red-500 w-[30%] hidden md:block"></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
