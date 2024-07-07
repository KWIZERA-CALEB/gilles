import React, { ReactNode } from 'react'

type ButtonProps = {
    bg: string,
    children: ReactNode
}
const Button = (props: ButtonProps) => {
    const { bg, children } = props
  return (
    <>
        <button type="submit" style={{backgroundColor: bg}}  className="flex flex-row items-center space-x-[10px] justify-center w-full select-none outline-0 pt-[12px] pb-[12px] pr-[16px] pl-[16px] font-bold rounded-[20px] text-white">{children}</button>
    </>
  )
}

export default Button
