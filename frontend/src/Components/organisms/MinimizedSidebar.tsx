import MenuLink from "../molecules/MenuLink"
import { ChartPieIcon } from '@heroicons/react/24/outline'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { PuzzlePieceIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { CogIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const MinimizedSidebar = () => {
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

    useEffect(()=> {
      const updateLocalStorageBasedOnViewport = () => {
        const viewportWidth = window.innerWidth
  
        if(viewportWidth <= 1260) {
          if(menuStatus === "open") {
            localStorage.setItem('menu', 'minimized')
          }
        }
      }
  
      updateLocalStorageBasedOnViewport()
  
      // Add event listener to handle resize
      window.addEventListener('resize', updateLocalStorageBasedOnViewport)
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', updateLocalStorageBasedOnViewport)
      }
    }, [])

  return (
    <div className="w-[80px] h-full hidden relative md:block">
      <div className="absolute right-[-5px] top-[10px] text-white font-bold flex justify-center items-center cursor-pointer w-[25px] p-[2px] h-[25px] rounded-full bg-blue-500">
        <button onClick={handleMenu}><ChevronLeftIcon className="size-[20px]" /></button>
      </div>
      <div className="overflow-y-scroll flex flex-col space-y-[300px] w-full h-full bg-[#fff]">

        <div className="w-full p-[20px]">
            <div className="flex flex-col space-y-[20px]">
                <MenuLink to="/admin/analytics" textColor={location.pathname === '/admin/analytics' ? '#2563eb' : '#64748b'} ><ChartPieIcon className="size-6 mr-[20px]" /></MenuLink>
                <MenuLink to="/admin/create" textColor={location.pathname === '/admin/create' ? '#2563eb' : '#64748b'} ><PlusCircleIcon className="size-6 mr-[20px]" /></MenuLink>
                <MenuLink to="/admin/management" textColor={location.pathname === '/admin/management' ? '#2563eb' : '#64748b'} ><PuzzlePieceIcon className="size-6 mr-[20px]" /></MenuLink>
                <MenuLink to="/admin/subscribers" textColor={location.pathname === '/admin/subscribers' ? '#2563eb' : '#64748b'} ><UserGroupIcon className="size-6 mr-[20px]" /></MenuLink>
                <MenuLink to="/admin/settings" textColor={location.pathname === '/admin/settings' ? '#2563eb' : '#64748b'} ><CogIcon className="size-6 mr-[20px]" /></MenuLink>
            </div>
        </div>

        <div className="w-full p-[20px]">
            <div className="flex flex-col space-y-[12px]">
                <MenuLink to="/admin/profile" textColor={location.pathname === '/admin/profile' ? '#2563eb' : '#64748b'} ><UserCircleIcon className="size-6" /></MenuLink>
                <form onSubmit={handleLogout}>
                  <button className="w-[30px] h-[30px] flex flex-row justify-center items-center text-white bg-red-500 outline-none font-bold p-[4px] rounded-[6px]"><ArrowRightStartOnRectangleIcon /></button>
                </form>
            </div>
        </div>

      </div>
    </div>
  )
}

export default MinimizedSidebar
