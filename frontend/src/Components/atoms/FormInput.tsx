
type InputProps = {
    placeholder: string,
    inputType: string,
    value: string,
    onchange: any
}

const FormInput = (props: InputProps) => {
  return (
    <>
        <div>
            <input type={props.inputType} placeholder={props.placeholder} onChange={props.onchange} className="mb-[20px] border-[2px] border-solid border-blue-500 focus:border-slate-900 outline-0 w-full p-[10px]" value={props.value} />
        </div>
    </>
  )
}

export default FormInput
