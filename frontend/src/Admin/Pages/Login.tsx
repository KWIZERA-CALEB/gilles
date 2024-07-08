import { useState } from "react"
import Button from "../../Components/atoms/Buttons/Button"
import FormInput from "../../Components/atoms/FormInput"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import axios from "axios"
import LoadingButton from "../../Components/atoms/Buttons/LoadingButton"
import { Link } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

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
    <div className="flex flex-col h-[100vh] w-full md:flex-row">
        <div className="w-full h-[100%] md:w-[50%] pl-[80px] pr-[80px] pb-[80px] pt-[80px]">
            <div className="flex flex-col items-start mb-[40px]">
                <div><img src="/images/logo1b.png" className="w-[160px] ml-[-22px] mb-[15px]" alt="Gilles Logo" /></div>
                <div><h3 className="font-bold text-[32px] mb-[15px] text-slate-800">Admin Login</h3></div>
                <div><h4 className="font-[500] text-[20px] text-slate-500">Welcome Back To Admin Panel</h4></div>
            </div>
            <div className="mb-[30px]">
                <form onSubmit={handleLogin}>
                    <div>
                        <p className="font-[500] text-[16px] mb-[10px] text-slate-500">Email Address</p>
                        <FormInput inputType="text" placeholder="Email" value={email} onchange={handleEmailChange} />
                    </div>
                    <div>
                        <p className="font-[500] text-[16px] mb-[10px] text-slate-500">Password</p>
                        <FormInput inputType="password" placeholder="Password" value={password} onchange={handlePasswordChange} />
                    </div>
                    {isLoading ? 
                        <div className="cursor-not-allowed">
                            <LoadingButton />
                        </div>

                        :
                    
                        <div>
                            <Button bg="#60a5fa" textColor="#fff">Login</Button>
                        </div>
                
                    }
                    
                </form>
            </div>
            <div className="border-b-[2px] border-solid border-slate-400">
                <div><h4 className="font-[500] text-[18px] text-slate-500 pb-[20px]">NOT AN ADMIN RETURN? <span className="bg-blue-500 text-[18px] ml-[20px] rounded-[6px] hover:bg-slate-900 hover:text-yellow-500 text-white select-none pl-[6px] pr-[6px] pt-[3px] pb-[3px]"><Link to={'/'}>Home</Link></span></h4></div>
            </div>
            
        </div>

        <div className="w-full bg-blue-400 hidden h-[100%] flex-col items-center md:w-[50%] md:flex">
            <div></div>
            <div>
                <img src="/images/admin-light.png" alt="Admin Secure" />
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Login
