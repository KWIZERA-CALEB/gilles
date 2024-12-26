import AdminNavigation from "../../components/Navigations/AdminNavigation"

const Manage = () => {
  return (
    <div className='w-full'>
      <AdminNavigation />

      <div className='pr-[40px] pl-[40px] pt-[60px]'>
        <h3 className='font-afacadFlux'>Recently Added Documentories</h3>
        {/* documentories list */}

        {/* <div className='flex justify-center pt-[50px] items-center'>
          <p className='font-afacadFlux text-[#fff]/60%'>Loading...</p>
        </div> */}

        <div className='pt-[50px] grid grid-cols-4 gap-4'>

          <div className='shadow-md bg-subPrimary rounded-[10px]'>
              <div className='w-full h-[200px]'>
                <img src="/images/favicon.png" className='w-full h-full cursor-pointer object-center object-cover' alt="Documentory Image" />
              </div>
              <div className='p-[20px]'>
                <h3 className='font-afacadFlux text-start cursor-pointer'>Why Product thinking is the next big thing in UX design</h3>

                <div className='flex flex-row space-x-[10px] items-center mt-[10px]'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="#fff">
                      <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                    </svg>
                  </div>
                  <div><p className='font-afacadFlux text-[#fff]/60%'>24 December, 2024</p></div>
                </div>

              </div>
          </div>
          <div className='shadow-md bg-subPrimary rounded-[10px]'>
              <div className='w-full h-[200px]'>
                <img src="/images/favicon.png" className='w-full h-full cursor-pointer object-center object-cover' alt="Documentory Image" />
              </div>
              <div className='p-[20px]'>
                <h3 className='font-afacadFlux text-start cursor-pointer'>Why Product thinking is the next big thing in UX design</h3>

                <div className='flex flex-row space-x-[10px] items-center mt-[10px]'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="#fff">
                      <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                    </svg>
                  </div>
                  <div><p className='font-afacadFlux text-[#fff]/60%'>24 December, 2024</p></div>
                </div>

              </div>
          </div>

        </div>

        {/* documentories list */}
      </div>
    </div>
  )
}

export default Manage
