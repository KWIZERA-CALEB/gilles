import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import FormInput from '../../Components/atoms/FormInput'
import toast from "react-hot-toast"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    useEffect(()=> {
        if(email === "" || password === "") {
            setDisabled(true)
        }else{
            setDisabled(false)
        }

    }, [email, password])

    const handleEmailChange = (e: any)=> {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: any)=> {
        setPassword(e.target.value)
    }

    const handleLogin = (e: any)=> {
        e.preventDefault()
        setIsLoading(true)

        const formData = {
            email,
            password
        }

        axios
            .post('http://localhost:8000/api/admin_login', formData)
                .then((result)=> {
                    console.log(result)
                    setIsLoading(false)
                    

                    if(result.data.message === 'No user found' || result.data.message === 'Incorrect Password' || result.data.message === 'Invalid email') {
                        setMessage(result.data.message)
                        toast.error(result.data.message, {
                            position: 'bottom-center',
                            style: {
                              background: 'red',
                              color: 'white'
                            }
                          });
                        setPassword('')
                    }else{
                        navigate('/admin/analytics')
                    }
                })
                .catch((error)=> {
                    console.log(error)
                    setPassword('')
                })
        

    }

  return (
    <div>
      <div className="p-[50px] w-[600px]">
      Admin Login Page
        <form onSubmit={handleLogin}>
            <div className="bg-red-500 text-white w-full">{message}</div>
            <FormInput placeholder='Email' inputType='text' value={email} onchange={handleEmailChange} />
            <FormInput placeholder='Password' inputType='password' value={password} onchange={handlePasswordChange} />
            {disabled ? (
                <div>
                    <button type="submit" className="w-full bg-blue-500 outline-0 p-[10px] text-white" disabled>Login</button>
                </div>

            ):isLoading ?(
                <div>
                    <button type="submit" className="w-full bg-blue-500 outline-0 p-[10px] text-white">
                        
                    </button>
                </div>
            ):(
                <div>
                    <button type="submit" className="w-full bg-blue-500 outline-0 p-[10px] text-white">Login</button>
                </div>
            )}
            
        </form>
      </div>
    </div>
  )
}

export default Login
