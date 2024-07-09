import MenuLink from "../molecules/MenuLink"
import Button from "../atoms/Buttons/Button"
import { ChartPieIcon } from '@heroicons/react/24/outline'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { PuzzlePieceIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { CogIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation();

    const navigate = useNavigate()

    const handleLogout = (e: any)=> {
      e.preventDefault()
      localStorage.removeItem('token')
      navigate('/admin/login')
    }

  return (
    <div className="w-[15%] h-full">
      <div className="overflow-y-scroll flex flex-col space-y-[300px] w-full h-full bg-[#fff]">

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
