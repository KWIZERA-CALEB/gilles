import Navbar from "../../Components/organisms/Navbar"
import Sidebar from "../../Components/organisms/Sidebar"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CameraIcon } from '@heroicons/react/24/outline'
import MinimizedSidebar from '../../Components/organisms/MinimizedSidebar'
import FormInput from "../../Components/atoms/FormInput"
import Button from "../../Components/atoms/Buttons/Button"

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

  const handleFullNameChange = ()=> {
    console.log('hello')
  }

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
                <div className="mt-[20px] p-[15px]">
                    <div className="flex justify-center bg-blue-500 items-center mb-[60px] relative h-[300px] w-full">
                        <div className="flex justify-center items-center absolute bottom-[-30px] p-[40px] w-[40px] h-[40px] rounded-full select-none font-black text-white bg-sky-500 text-[20px]">C</div>
                    </div>
                    <div className="mt-[20px] mb-[20px]">
                      <h3>Profile Settings</h3>
                    </div>
                    <div className="flex flex-col justify-between w-full border-solid border-gray-300 border-[2px] p-[40px] space-x-[0px] space-y-[24px] md:space-y-[0px] md:space-x-[12px] md:flex-row">
                      <div className="w-full md:w-[50%] flex flex-col space-y-[6px]">
                          <div>
                            <p>Full Name</p>
                            <FormInput inputType="text" onchange={handleFullNameChange} value="" placeholder="Full Name" />
                          </div>
                          <div>
                            <p>Title</p>
                            <FormInput inputType="text" onchange={handleFullNameChange} value="" placeholder="Title" />
                          </div>
                          <div>
                            <Button bg="#3b82f6" textColor="#fff">Update Credentials</Button>
                          </div>
                      </div>
                      <div className="w-full md:w-[50%] flex flex-col space-y-[6px]">
                        <div>
                              <p>Full Name</p>
                              <FormInput inputType="text" onchange={handleFullNameChange} value="" placeholder="Old password" />
                            </div>
                            <div>
                              <p>Title</p>
                              <FormInput inputType="text" onchange={handleFullNameChange} value="" placeholder="New Password" />
                            </div>
                            <div>
                              <Button bg="#3b82f6" textColor="#fff">Update Password</Button>
                            </div>
                        </div>
                    </div>
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
