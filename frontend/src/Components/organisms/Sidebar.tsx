import MenuLink from "../molecules/MenuLink"
import Button from "../atoms/Buttons/Button"
import { ChartPieIcon } from '@heroicons/react/24/outline'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { PuzzlePieceIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { CogIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'


const Sidebar = () => {
    const location = useLocation();

    const navigate = useNavigate()

    const handleLogout = (e: any)=> {
      e.preventDefault()
      localStorage.removeItem('token')
      navigate('/admin/login')
    }

    const menuStatus = localStorage.getItem('menu')
    console.log(menuStatus)

    const handleMenu = ()=> {
        if(menuStatus === "open") {
            localStorage.setItem('menu', 'minimized')
        }else if(menuStatus === "minimized") {
            localStorage.setItem('menu', 'open')
        }else{
            console.log('Error for menu')
        }
    }

  return (
    <div className="w-[15%] h-full hidden relative md:block">
      <div className="absolute right-[-5px] hidden top-[10px] text-white font-bold flex justify-center items-center cursor-pointer w-[25px] p-[2px] h-[25px] rounded-full bg-blue-500">
        <button onClick={handleMenu}><ChevronLeftIcon className="size-[20px]" /></button>
      </div>
      <div className="overflow-y-scroll flex flex-col space-y-[300px] lg:justify-between w-full h-full bg-[#fff]">

        <div className="w-full p-[20px]">
            <div><h4 className="font-[500] text-[18px] mb-[20px] select-none text-slate-500">MENU</h4></div>
            <div className="flex flex-col space-y-[20px]">
                <MenuLink to="/admin/analytics" textColor={location.pathname === '/admin/analytics' ? '#2563eb' : '#64748b'} ><ChartPieIcon className="size-6 mr-[20px]" /> Analytics</MenuLink>
                <MenuLink to="/admin/create" textColor={location.pathname === '/admin/create' ? '#2563eb' : '#64748b'} ><PlusCircleIcon className="size-6 mr-[20px]" /> Create</MenuLink>
                <MenuLink to="/admin/management" textColor={location.pathname === '/admin/management' ? '#2563eb' : '#64748b'} ><PuzzlePieceIcon className="size-6 mr-[20px]" /> Management</MenuLink>
                <MenuLink to="/admin/subscribers" textColor={location.pathname === '/admin/subscribers' ? '#2563eb' : '#64748b'} ><UserGroupIcon className="size-6 mr-[20px]" /> Subscribers</MenuLink>
                <MenuLink to="/admin/settings" textColor={location.pathname === '/admin/settings' ? '#2563eb' : '#64748b'} ><CogIcon className="size-6 mr-[20px]" /> Settings</MenuLink>
            </div>
        </div>

        <div className="w-full p-[20px]">
            <div><h4 className="font-[500] text-[18px] mb-[20px] select-none text-slate-500">ACCOUNT</h4></div>
            <div className="flex flex-col space-y-[12px]">
                <MenuLink to="/admin/profile" textColor={location.pathname === '/admin/profile' ? '#2563eb' : '#64748b'} >Profile</MenuLink>
                <form onSubmit={handleLogout}>
                  <Button bg="#ef4444" textColor="#fff">Logout</Button>
                </form>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
