import { Button } from "@nextui-org/button";
import { useLocation, useNavigate } from 'react-router-dom'
const AdminNavigation = () => {
  const currentPath = useLocation()
  const navigate = useNavigate()

  return (
    <div className='flex flex-row justify-between items-center pr-[40px] pl-[40px] h-[60px] border-b border-subPrimary'>

      <div className='flex flex-row items-center space-x-[20px] cursor-pointer' title='Gilles Logo'>
        <div>
            <img src="/images/favicon.png" className='w-[40px]' alt="Gilles logo" />
        </div>
        <div>
            <ul className='flex flex-row items-center space-x-[12px]'>
                <li className={currentPath.pathname === '/admin/manage' ? 'cursor-pointer font-afacadFlux text-Primary' : 'cursor-pointer font-afacadFlux hover:text-Primary'}>Manage</li>
                <li className={currentPath.pathname === '/admin/add-manager' ? 'cursor-pointer font-afacadFlux text-Primary' : 'cursor-pointer font-afacadFlux hover:text-Primary'}>Add Manager</li>
                <li className={currentPath.pathname === '/admin/settings' ? 'cursor-pointer font-afacadFlux text-Primary' : 'cursor-pointer font-afacadFlux hover:text-Primary'}>Settings</li>
            </ul>
        </div>
      </div>

      <div className="flex flex-row space-x-[20px] items-center">
        <div>
          <Button type='button' radius="full" size="sm" onClick={() => navigate('/admin/create')}>Add New</Button>
        </div>
        <div className='w-[30px] h-[30px] cursor-pointer'>
          <img src="/images/favicon.png" className='w-full h-full rounded-full object-cover object-center' alt="User" />
        </div>
      </div>

    </div>
  )
}

export default AdminNavigation
