import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";


const Login = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        <div className='w-[450px] bg-[#1A1A1D] pl-[20px] pr-[20px] rounded-[20px] pt-[40px] pb-[40px]'>
          <p className="text-center font-afacadFlux text-[20px] select-none cursor-pointer tracking-wide">
            Admin Login
          </p>
          <p className="text-center font-afacadFlux select-none cursor-pointer">
            This page is for admins only. Enter correct credentials to login.
          </p>
          <div className='mt-[10px]'>
              <form className='flex flex-col space-y-[6px]'>
                <Input label="Email" placeholder="Enter your email" type="email" variant="bordered" />
                <Input label="Password" placeholder="Enter your password" type="password" variant="bordered" />
                <Button type='button' className='bg-Primary text-[#fff] group relative' radius="full" size="md">Login</Button>
              </form>
          </div>
        </div>
    </div>
  )
}

export default Login
