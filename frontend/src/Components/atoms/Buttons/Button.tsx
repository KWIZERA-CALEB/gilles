import { ReactNode } from 'react'

type ButtonProps = {
    bg: string,
    textColor: string,
    children: ReactNode
}
const Button = (props: ButtonProps) => {
    const { bg, children, textColor } = props
  return (
    <>
        <button type='submit' style={{backgroundColor: bg, color: textColor}}  className="w-full flex flex-row items-center space-x-[10px] justify-center select-none outline-0 text-[20px] pt-[17px] pb-[17px] pr-[30px] pl-[30px] font-bold">{children}</button>
    </>
  )
}

export default Button
