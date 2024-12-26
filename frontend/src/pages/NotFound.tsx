import { Button } from "@nextui-org/button";
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const handleNavigateBackHome = () => {
    navigate('/admin/login')
  }
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div>
        <h3 className="text-center font-robotoSlab select-none cursor-pointer text-[30px] font-[800]">
          404
        </h3>
        <p className="text-center font-afacadFlux text-[20px] select-none cursor-pointer tracking-wide">
          Looks like this page doesn't exist
        </p>
        <p className="text-center font-afacadFlux select-none cursor-pointer">
          Go back to home and continue exploring
        </p>
        <div className="flex justify-center mt-[15px]">
          <Button onPress={handleNavigateBackHome} type='button' className='bg-Primary text-[#fff] group relative' radius="full" size="md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="20" height="20">
              <path d="M22.0003 12.9999L22.0004 11L8.41421 11V5.58582L2 12L8.41421 18.4142L8.41421 13L22.0003 12.9999Z"></path>
            </svg>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
