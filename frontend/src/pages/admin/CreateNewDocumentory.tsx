import AdminNavigation from "../../components/Navigations/AdminNavigation"
import { Input } from '@nextui-org/input'

const CreateNewDocumentory = () => {
  return (
    <div className='w-full'>
        <AdminNavigation />
        <div className='pr-[40px] pl-[40px] pt-[60px] w-[50%]'>
            <h3 className='font-afacadFlux'>Add New Documentory</h3>

            <div className='mt-[20px]'>
                <div>
                    <p className='font-afacadFlux text-[#fff]/50%'>Documentory Title</p>
                    <Input placeholder='Documentory Title' variant='bordered' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default CreateNewDocumentory
