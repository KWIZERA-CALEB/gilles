import Navbar from "../../Components/organisms/Navbar"
import Sidebar from "../../Components/organisms/Sidebar"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CameraIcon } from '@heroicons/react/24/outline'
import MinimizedSidebar from '../../Components/organisms/MinimizedSidebar'

interface AdminData {
  full_name: string,
  title: string
}

const Profile = () => {
  const [adminData, setAdminData] = useState<AdminData | null>(null);
  const navigate = useNavigate()
  const AppUrl = import.meta.env.VITE_APP_API_URL;
  const [menu, setMenu] = useState('')
  useEffect(()=> {
    document.title = "Admin • Profile"
  }, [])

  useEffect(()=> {
    const fetchMenu = localStorage.getItem('menu')
    setMenu(fetchMenu ?? 'open')
  }, [])

  useEffect(()=> {
    const token = localStorage.getItem('token')
    
    if (!token) {
      navigate('/admin/login')
      return;
    }

    axios
      .get(`${AppUrl}/admin_info`,{
        headers: {Authorization: `Bearer ${token}`}
      })
        .then((result)=> {
            if (result.data && result.data.user) {
              setAdminData(result.data.user);
            } else {
              navigate('/admin/login');
            }
            
        })
        .catch((error)=> {
          console.log(error)
          navigate('/admin/login')
        })

  }, [navigate])


  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <div className="flex flex-row w-full h-full">
        {menu === "open" ? <Sidebar /> : <MinimizedSidebar />}
        

        <div className={menu === "open" ? "w-full bg-[#e9eef0] p-[0px] md:w-[85%]" : "w-full bg-[#e9eef0] p-[0px]  md:w-[100%]"}>

          <div className="overflow-y-scroll w-full h-full bg-[#fff] rounded-[4px] p-[30px]">
            {adminData ? 
              <>
                <div className="w-full p-[15px] rounded-[6px]">
                  <h4 className="font-black text-[32px] text-start text-slate-900 select-none">WELCOME <span className="text-blue-500 uppercase">{adminData.full_name}</span></h4>
                </div>
                <div className="flex flex-col space-x-[0px] space-y-[6px] md:space-y-[0px] md:space-x-[4px] md:flex-row md:items-start">
                    <div className="w-full md:w-[40%] pl-[20px] pr-[20px] pt-[40px] pb-[40px] flex flex-row justify-center items-center rounded-[6px] border-[1px] border-solid border-gray-200">
                        <div className="bg-blue-500 relative text-white font-bold flex justify-center items-center w-[100px] h-[100px] rounded-full cursor-pointer p-[5px]">
                          <p>C</p>
                          <div className="w-[30px] h-[30px] flex justify-center items-center p-[4px] rounded-full bg-red-500 absolute bottom-[0px] right-[0px]"><CameraIcon className="size-[18px]" /></div>
                        </div>
                    </div>
                    <div className="w-full md:w-[60%] pl-[20px] pr-[20px] pt-[40px] pb-[40px] rounded-[6px] border-[1px] border-solid border-gray-200">Edit User</div>
                </div>
              </>
              :
              <div className="bg-gray-200 w-full h-[100px] p-[15px] rounded-[6px] animate-pulse"></div>
            }
            
          </div>

        </div>

      </div>
    </div>
  )
}

export default Profile
