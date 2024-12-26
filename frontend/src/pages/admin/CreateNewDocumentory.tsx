import AdminNavigation from "../../components/Navigations/AdminNavigation"
import { Input } from '@nextui-org/input'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react'
import { Button } from "@nextui-org/button";


const CreateNewDocumentory = () => {
    const [content, setContent] = useState('');
    const [preview, setPreview] = useState<string | null>(null);

    const handleChange = (value: string) => {
      setContent(value);
    }; 

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          const previewUrl = URL.createObjectURL(file);
          setPreview(previewUrl);
        }
    };
      
  return (
    <div className='w-full'>
        <AdminNavigation />
        <div className='pr-[40px] pl-[40px] pt-[60px]'>
            <h3 className='font-afacadFlux'>Add New Documentory</h3>

            <div className='flex flex-col md:flex-row md:space-x-[24px]'>
                <div className='w-full md:w-[50%]'>
                    <div className='mt-[20px]'>
                        <div>
                            <p className='font-afacadFlux text-[#fff]/50%'>Documentory Title</p>
                            <Input placeholder='Documentory Title' variant='bordered' />
                        </div>
                        <div>
                            <input type='file' className='hidden' onChange={handleImageChange} accept="image/*" id="image" />
                        </div>
                        <div className='mt-[15px]'>
                            <p className='font-afacadFlux text-[#fff]/50%'>Documentory Full Description</p>
                            <ReactQuill className='h-[150px]' value={content} onChange={handleChange} />
                        </div>
                        <div className='mt-[60px]'>
                            <label htmlFor="image" className='cursor-pointer font-afacadFlux'>Select Image</label>
                        </div>
                        <div className='mt-[40px]'>
                            <Button type='button' className='bg-Primary text-[#fff] group relative' radius="full" size="md">Create</Button>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[50%]'>
                    <div className='mt-[20px]'>
                        <p className='font-afacadFlux text-[#fff]/50%'>Documentory Image(Optional)</p>
                        {preview ? 
                            <div className='p-[20px] border-subPrimary border-solid border-[1px] w-full'>
                                <img
                                    src={preview}
                                    alt="Preview"
                                    style={{ width: '200px', height: 'auto', border: '1px solid #ccc' }}
                                />
                            </div>
                        :
                            <div className='p-[20px] border-subPrimary border-solid border-[1px] w-full h-[200px] flex justify-center items-center'>
                                <p className='font-afacadFlux text-[#fff]/50%'>No Image Selected</p>
                            </div>
                        }
                        <div onClick={() => setPreview(null)}>
                            <p className='font-afacadFlux bg-red-500 cursor-pointer text-[#fff]/50%'>Remove Image</p>
                        </div>
                    </div>

                </div>
            </div>

            
        </div>

    </div>
  )
}

export default CreateNewDocumentory
