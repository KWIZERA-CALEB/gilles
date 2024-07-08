
type InputProps = {
    placeholder: string,
    inputType: string,
    value: string,
    onchange: any
}

const FormInput = (props: InputProps) => {
  return (
    <>
        <div className="mb-[20px]">
            <input type={props.inputType} placeholder={props.placeholder} onChange={props.onchange} className="mb-[20px] border-[2px] border-solid border-slate-400 outline-[2px] outline-offset-4 outline-solid outline-blue-500 w-full pl-[30px] pt-[17px] pb-[17px] pr-[15px]" value={props.value} />
        </div>
    </>
  )
}

export default FormInput
