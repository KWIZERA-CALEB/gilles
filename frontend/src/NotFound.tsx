import { useEffect } from 'react'
import Button from './Components/atoms/Buttons/Button'
import { Link } from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/24/outline'

const NotFound = () => {
  useEffect(()=> {
    document.title = "404 Page"
  }, [])

  return (
    <div className="w-full h-[100vh] flex justify-center fixed top-0 items-center">
      <div>
        <div>
          <h4 className="font-black text-[32px] text-center text-slate-900 select-none">404 PAGE NOT FOUND</h4>
        </div>
        <div>
          <img src="/images/notfound.gif" className='w-[500px]' alt="Not Found" />
        </div>
        <div className="mb-[10px]">
          <p className="text-[20px] text-slate-500 text-center font-bold select-none">It seems that you are lost, It's not a mistake</p>
        </div>
        <div>
          <Link to={'/'}>
            <Button textColor='#fff' bg='#0f172a'><HomeIcon className="size-6 mr-[20px]" /> Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
