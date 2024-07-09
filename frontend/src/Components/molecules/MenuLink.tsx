import { ReactNode } from 'react'
import { Link } from 'react-router-dom';

type LinkProps = {
    to: string,
    textColor: string,
    children: ReactNode
}

const MenuLink = (props: LinkProps) => {
    const { to, children, textColor } = props
  return (
    <Link to={to} >
        <div className="hover:bg-gray-300 cursor-pointer transition pt-[4px] pb-[4px] pr-[6px] pl-[6px] w-full h-[45px] flex items-center rounded-[6px]">
            <div>
                <h4 style={{color: textColor}} className="font-[500] text-[17px] cursor-pointer flex flex-row items-center">{children}</h4>
            </div>
        </div>
    </Link>
  )
}

export default MenuLink
