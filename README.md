import { useEffect, useState } from 'react'
import LoadingButton from "../../Components/atoms/Buttons/LoadingButton"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface AdminData {
  full_name: string;
  email: string;
}

const Analytics = () => {
  const [adminData, setAdminData] = useState<AdminData | null>(null);
  const navigate = useNavigate()

  useEffect(()=> {
    const token = localStorage.getItem('token')
    
    if (!token) {
      navigate('/admin/login')
      return;
    }

    axios
      .get('http://localhost:8000/api/admin_info',{
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

  const handleLogout = (e: any)=> {
    e.preventDefault()
    localStorage.removeItem('token')
    navigate('/admin/login')
  }


  return (
    <div>
      Analytics Page
      <div>
      {adminData ? <p>Welcome, {adminData.full_name}!</p> : <p>Loading user info...</p>}
       <button onClick={handleLogout}>Logout</button>
      </div>
      <LoadingButton />
    </div>
  )
}

export default Analytics
