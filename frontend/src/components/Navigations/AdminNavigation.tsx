import React from 'react'

const AdminNavigation = () => {
  return (
    <div className='flex flex-row justify-between items-center pr-[40px] pl-[40px] h-[60px]'>

      <div className='flex flex-row items-center space-x-[20px]'>
        <div>
            <img src="/images/favicon.png" className='w-[40px]' alt="Gilles logo" />
        </div>
        <div>
            <ul className='flex flex-row items-center space-x-[12px]'>
                <li className='cursor-pointer font-afacadFlux hover:text-Primary'>Manage</li>
                <li className='cursor-pointer font-afacadFlux hover:text-Primary'>Add Manager</li>
                <li className='cursor-pointer font-afacadFlux hover:text-Primary'>Settings</li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default AdminNavigation
